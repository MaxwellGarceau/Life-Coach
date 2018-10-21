import React from 'react';

// 3rd Party
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

// Test Fixtures
import eventsFixture from '../../tests/fixtures/events';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  render () {
    return (
      <BigCalendar
        localizer={localizer}
        events={eventsFixture}
        titleAccessor='title'
        startAccessor='startDate'
        endAccessor='endDate'
      />
    );
  }
}

export default Calendar;
