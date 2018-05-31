import React from 'react';
import DailyViewRow from './DailyViewRow';

export class DailyView extends React.Component {
  render () {
    return (
      <div className="calendar">
        <DailyViewRow startTime={'12am'} />
        <DailyViewRow startTime={'1am'} />
        <DailyViewRow startTime={'2am'} />
        <DailyViewRow startTime={'3am'} />
        <DailyViewRow startTime={'4am'} />
        <DailyViewRow startTime={'5am'} />
        <DailyViewRow startTime={'6am'} />
        <DailyViewRow startTime={'7am'} />
        <DailyViewRow startTime={'8am'} />
        <DailyViewRow startTime={'9am'} />
        <DailyViewRow startTime={'10am'} />
        <DailyViewRow startTime={'11am'} />
        <DailyViewRow startTime={'12pm'} />
        <DailyViewRow startTime={'1pm'} />
        <DailyViewRow startTime={'2pm'} />
        <DailyViewRow startTime={'3pm'} />
        <DailyViewRow startTime={'4pm'} />
        <DailyViewRow startTime={'5pm'} />
        <DailyViewRow startTime={'6pm'} />
        <DailyViewRow startTime={'7pm'} />
        <DailyViewRow startTime={'8pm'} />
        <DailyViewRow startTime={'9pm'} />
        <DailyViewRow startTime={'10pm'} />
        <DailyViewRow startTime={'11pm'} />
      </div>
    );
  }
}
