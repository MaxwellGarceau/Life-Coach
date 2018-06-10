import React from 'react';
import { shallow } from 'enzyme';
import { defaultEndTime, endTimeStartTimeDifference } from '../selectors/determine-elapsed-time';
import { DailyViewTimeSelector } from '../../components/DailyViewTimeSelector';

test('should render DailyViewTimeSelector correctly', () => {
  const wrapper = shallow(<DailyViewTimeSelector />);
  expect(wrapper).toMatchSnapshot();
});
