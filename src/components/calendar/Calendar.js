import React from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

// Test Fixtures
import eventsFixture from '../../tests/fixtures/events';

class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eventsFixture
    }
  }
  handleEventClick = (calEvent, jsEvent, view) => {
    console.log('calEvent', calEvent);
    console.log('content:', calEvent.content);
  };

  render () {
    return (
      <div id="full-calendar-wrapper">
        <FullCalendar
          id="full-calendar"
          header={{
            left: 'prev, next today myCustomButton',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
          }}
          eventClick={this.handleEventClick}
          eventStartEditable={true}
          eventDurationEditable={true}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.eventsFixture} />
      </div>
    );
  }
}

export default Calendar;
