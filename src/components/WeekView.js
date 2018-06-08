import React from 'react';
import DailyView from './DailyView';

export default class WeekView extends React.Component {
  render (props) {
    return (
      <section>
        <DailyView weekDay="Sunday" />
        <DailyView weekDay="Monday" />
      </section>
    );
  }
}
