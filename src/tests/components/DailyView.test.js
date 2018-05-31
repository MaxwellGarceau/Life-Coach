import React from 'react';
import { shallow } from 'enzyme';
import { DailyView } from '../../components/DailyView';

test('should render DailyView correctly', () => {
  const wrapper = shallow(<DailyView />);
  expect(wrapper).toMatchSnapshot();
});
