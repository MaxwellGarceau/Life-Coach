import React from 'react';
import { shallow } from 'enzyme';
import { DailyViewModal } from '../../components/DailyViewModal';

const defaultStartTime = '1am';

test('should render DailyViewModal correctly', () => {
  const wrapper = shallow(<DailyViewModal defaultStartTime={defaultStartTime} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render note description change', () => {
  const value = 'My Note';
  const wrapper = shallow(<DailyViewModal defaultStartTime={defaultStartTime} />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('noteDescription')).toBe(value);
});

test('should call setNoteDescription prop for form submission', () => {
  const setNoteDescriptionSpy = jest.fn();
  const onToggleModalSpy = jest.fn();
  const startAddNote = jest.fn();
  const value = 'My Note';  
  const wrapper = shallow(<DailyViewModal startAddNote={startAddNote} defaultStartTime={defaultStartTime} setNoteDescription={setNoteDescriptionSpy} onToggleModal={onToggleModalSpy}/>);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(setNoteDescriptionSpy).toHaveBeenLastCalledWith(value);
});

test('should call onToggleModal prop for form submission', () => {
  const setNoteDescriptionSpy = jest.fn();
  const onToggleModalSpy = jest.fn();
  const startAddNote = jest.fn();
  const wrapper = shallow(<DailyViewModal startAddNote={startAddNote} defaultStartTime={defaultStartTime} setNoteDescription={setNoteDescriptionSpy} onToggleModal={onToggleModalSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(onToggleModalSpy).toHaveBeenCalled();
});

test('should call onToggleModal prop on cancel button click', () => {
  const onToggleModalSpy = jest.fn();
  const wrapper = shallow(<DailyViewModal defaultStartTime={defaultStartTime} onToggleModal={onToggleModalSpy}/>);
  wrapper.find('button').at(2).simulate('click');
  expect(onToggleModalSpy).toHaveBeenCalled();
});

test('should clear note description on clear contents button click', () => {
  const setNoteDescriptionSpy = jest.fn();
  const onToggleModalSpy = jest.fn();
  const wrapper = shallow(<DailyViewModal defaultStartTime={defaultStartTime} setNoteDescription={setNoteDescriptionSpy} onToggleModal={onToggleModalSpy}/>);
  wrapper.find('button').at(1).simulate('click');
  expect(wrapper.state('noteDescription')).toBe('');
});

test('should call onToggleModal prop on clear contents button click', () => {
  const setNoteDescriptionSpy = jest.fn();
  const onToggleModalSpy = jest.fn();
  const wrapper = shallow(<DailyViewModal defaultStartTime={defaultStartTime} setNoteDescription={setNoteDescriptionSpy} onToggleModal={onToggleModalSpy}/>);
  wrapper.find('button').at(1).simulate('click');
  expect(onToggleModalSpy).toHaveBeenCalled();
});

// Create test for redux (start add note was called)
