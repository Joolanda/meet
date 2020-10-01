import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '.EventList';

describe('<App /> component', () => {

  test('render list of events', () =>{
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
//test('renders learn react link', () => {
//  const { getByText } = render(<App />);
//  const linkElement = getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
});
