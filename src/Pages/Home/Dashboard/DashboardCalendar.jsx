import React from 'react';

function DashboardCalendar(props) {
    const {userFormula, day, water} = props
    return (
        <div
            key={day}
            className={`${!!userFormula && water > userFormula / 2 && 'bg-50'} ${!!userFormula && water >= userFormula && 'bg-100'}  p-2 m-2 calendar-item`}>
        </div>
    );
}

export {DashboardCalendar};