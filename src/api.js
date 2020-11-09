import { mockData } from './mock-data';
import NProgress from 'nprogress';
import axios from 'axios';

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
    window.location.protocol + "//" + 
    window.location.host +
    window.location.pathname;
  window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

//  call a function, checkToken, to check the token’s validity
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};
    // some keys, check them later
    //"YOUR_SERVERLESS_GET_AUTH_URL_ENDPOINT"
    // const getAuthURL = "https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
    // const getToken = "https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/token/";
    // YOUR_GET_EVENTS_API_ENDPOINT
    // const getCalendarEvents = "https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/get-events/";
/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

 const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location); // local var with same label
  var locations = [...new Set(extractLocations)];
  return locations;
};

const getEvents = async (max_results = 32) => {
  NProgress.start();
  // console.log('getEvents token: ', token)
  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return { events: mockData, locations: extractLocations(mockData) };
  }
  if (! navigator.online) {
    const { events } = await localStorage.getItem("lastEvents");
    NProgress.done();
    return { events: JSON.parse(events), locations: extractLocations(events) };
  }

  const token = await getAccessToken();
   console.log('getEvents token: ', token)
  if (token) {
    removeQuery();
    // YOUR_GET_EVENTS_API_ENDPOINT
    //testing new version of endpoint:
    const url = `https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}`;
    //const url = `https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/get-events/{access_token}/${token}`;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data.events));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return { events: result.data.events, locations };
  }
};


// const getAccessToken Waar is deze functie gebleven?
const getAccessToken = async () => {
  const accessToken = await localStorage.getItem("access_token");
//  google redirect user back to app with code which you can use
// to retrieve the access tocken from Lambda fcts on auth server.
const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
      //"YOUR_SERVERLESS_GET_AUTH_URL_ENDPOINT"
      "https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
    );
    const { authUrl } = results.data;
    return (window.location.href = authUrl);
    }
  return code && getToken(code);
  }
return accessToken;
};

// check volgorde van fcts


const getToken = async (code) => {
  removeQuery();
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://jvsv8khfpd.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

export { getEvents, getAccessToken, extractLocations, getToken, checkToken };