import React from 'react';
// import { Link } from 'react-router-dom';
import DailyViewRow from './DailyViewRow';

export default class DailyView extends React.Component {
  render (props) {
    return (
      <section>
        <h1>{this.props.weekDay || 'Make Algorithm For Current Day Of Week'}</h1>
        <div className="calendar">
          <DailyViewRow defaultStartTime={'12am'} />
          <DailyViewRow defaultStartTime={'1am'} />
          <DailyViewRow defaultStartTime={'2am'} />
          <DailyViewRow defaultStartTime={'3am'} />
          <DailyViewRow defaultStartTime={'4am'} />
          <DailyViewRow defaultStartTime={'5am'} />
          <DailyViewRow defaultStartTime={'6am'} />
          <DailyViewRow defaultStartTime={'7am'} />
          <DailyViewRow defaultStartTime={'8am'} />
          <DailyViewRow defaultStartTime={'9am'} />
          <DailyViewRow defaultStartTime={'10am'} />
          <DailyViewRow defaultStartTime={'11am'} />
          <DailyViewRow defaultStartTime={'12pm'} />
          <DailyViewRow defaultStartTime={'1pm'} />
          <DailyViewRow defaultStartTime={'2pm'} />
          <DailyViewRow defaultStartTime={'3pm'} />
          <DailyViewRow defaultStartTime={'4pm'} />
          <DailyViewRow defaultStartTime={'5pm'} />
          <DailyViewRow defaultStartTime={'6pm'} />
          <DailyViewRow defaultStartTime={'7pm'} />
          <DailyViewRow defaultStartTime={'8pm'} />
          <DailyViewRow defaultStartTime={'9pm'} />
          <DailyViewRow defaultStartTime={'10pm'} />
          <DailyViewRow defaultStartTime={'11pm'} />
        </div>
      </section>
    );
  }
}
