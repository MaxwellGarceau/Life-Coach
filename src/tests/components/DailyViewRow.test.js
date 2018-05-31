import React from 'react';
import { shallow } from 'enzyme';
import { DailyViewRow } from '../../components/DailyViewRow';

test('should render DailyViewRow correctly', () => {
  const wrapper = shallow(<DailyViewRow />);
  expect(wrapper).toMatchSnapshot();
});

test('should change isModalVisible to true and toggle modal on click', () => {
  const wrapper = shallow(<DailyViewRow />);
  wrapper.find('div.calendar__row').simulate('click');
  expect(wrapper.state('isModalVisible')).toBe(true);
});
