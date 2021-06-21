import React from 'react';

function CalendarList(props) {
    const {water, day, waterDay} = props
    return (
        <div
            className={`${water > 200 && 'bg-cal--50'}${water >= 500 && 'bg-cal-100'} calendar-element p-4 m-2`}
            onClick={() => waterDay(day)} key={day}>
            <p className='calendar-element__text'>{day}</p>
        </div>
    );
}

export {CalendarList};