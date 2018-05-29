import React from 'react';
import { DailyViewRow } from './DailyViewRow';

export class DailyView extends React.Component {
  render () {
    return (
      <div className="calendar">
        <DailyViewRow time={'12am'} />
        <DailyViewRow time={'1am'} />
        <DailyViewRow time={'2am'} />
        <DailyViewRow time={'3am'} />
        <DailyViewRow time={'4am'} />
        <DailyViewRow time={'5am'} />
        <DailyViewRow time={'6am'} />
        <DailyViewRow time={'7am'} />
        <DailyViewRow time={'8am'} />
        <DailyViewRow time={'9am'} />
        <DailyViewRow time={'10am'} />
        <DailyViewRow time={'11am'} />
        <DailyViewRow time={'12pm'} />
        <DailyViewRow time={'1pm'} />
        <DailyViewRow time={'2pm'} />
        <DailyViewRow time={'3pm'} />
        <DailyViewRow time={'4pm'} />
        <DailyViewRow time={'5pm'} />
        <DailyViewRow time={'6pm'} />
        <DailyViewRow time={'7pm'} />
        <DailyViewRow time={'8pm'} />
        <DailyViewRow time={'9pm'} />
        <DailyViewRow time={'10pm'} />
        <DailyViewRow time={'11pm'} />
      </div>
    );
  }
}
