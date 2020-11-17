import puppeteer from 'puppeteer';

// feature 2
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });
  
  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });
});
// feature 1
describe('filter events by city', () => { 
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
            //headless: false,
      //slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });
  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => { 
    const eventSummary = await page.$('.event');
    expect(eventSummary).toBeDefined();
 }); 
  test('User should see a list of suggestions when they search for a city', async () => { 
    const eventSummary = await page.$('.suggestions li');
    expect(eventSummary).toBeDefined();
 });
  test('User can select a city from the suggested list', async () => { 
  const eventSummary = await page.$('.suggestions');
  await page.type('.city', 'Berlin');
 expect(eventSummary).toBeDefined();
  });
});

