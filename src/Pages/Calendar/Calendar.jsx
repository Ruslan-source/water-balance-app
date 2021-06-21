import React, {useState} from 'react';
import './style.sass'
import {useSelector} from "react-redux";
import {ProgressBar} from "react-bootstrap";
import {CalendarList} from "./CalendarList";


function Calendar() {
    const calendar = useSelector(state => state.waterBalance.calendar)
    const userFormula = useSelector(state => state.waterBalance.userFormula)
    const [val,setVal] = useState([])



    const waterDay = (day) => calendar.map(el => el.day === day && setVal(el))

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-xl-12 text-center w-100 block-title mb-5">
                    <h3 className='title-text m-0 p-3'>Календарь</h3>
                </div>
                <div className="col-xl-6 d-flex flex-wrap  ">
                    {!!calendar && calendar.map(el => {
                        return <CalendarList {...el} waterDay={waterDay}/>
                    })}
                </div>
                <div className="col-xl-6">
                    <h4>Статистика за день</h4>
                    <p>Вы можете посмотреть статистику за выбранный день нажав на день в календаре</p>
                    <p>День: {val.day}</p>
                    <p className='m-0'>Выпито: {val.water}</p>
                    <ProgressBar now={val.water / userFormula * 100} className='mt-2 mb-2'/>
                    <p>Статус: {val.message}</p>
                </div>
            </div>
        </div>
    );
}

export {Calendar}