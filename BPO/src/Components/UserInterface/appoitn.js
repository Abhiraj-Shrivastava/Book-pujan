import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import TimePicker from 'react-time-picker';

function TimeSlotPicker() {
  const [selectedTime, setSelectedTime] = useState(null);

  function handleTimeSelect(newTime) {
    setSelectedTime(newTime);

    // Send a POST request to save the selected time in the database
    const selectedDateTime = moment()
      .add(1, 'day') // next day
      .startOf('day')
      .add(moment.duration(newTime));

    axios.post('/api/time-slot', { dateTime: selectedDateTime })
      .then(() => console.log('Time slot saved'))
      .catch((err) => console.log(err.message));
  }

  const start = moment().add(1, 'day').startOf('day'); // next day
  const end = moment(start).add(23, 'hours'); // 11 PM (last possible hour)

  const timeSlots = [];
  for (let time = moment(start); time <= end; time.add(1, 'hour')) {
    timeSlots.push(time.format('h:mm A'));
  }

  return (
    <div>
      <TimePicker
        value={selectedTime}
        onChange={handleTimeSelect}
        disableClock
        format="h:mm A"
        hourAriaLabel="Hour"
        minuteAriaLabel="Minute"
        secondAriaLabel="Second"
        amPmAriaLabel="AM/PM"
        minTime={timeSlots[0]}
        maxTime={timeSlots[timeSlots.length - 1]}
        disabled={timeSlots.length === 0}
        disableTimes={timeSlots.filter((timeSlot) => timeSlot !== selectedTime)}
      />
    </div>
  );
}
 export default TimeSlotPicker