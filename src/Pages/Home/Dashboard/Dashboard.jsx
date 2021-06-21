import React from 'react';
import './style.sass'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {paths} from "../../../constans/route.constants";
import {DashboardCalendar} from "./DashboardCalendar";

function Dashboard() {
    const calendar = useSelector(state => state.waterBalance.calendar)
    const userFormula = useSelector(state => state.waterBalance.userFormula)

    console.log(userFormula / 2)
    return (
        <div className='mb-3'>
            <h3 className='m-2 text-center'>Ваша статистика</h3>
            <div className='flex-wrap  d-flex calendar'>
                {
                    !!calendar && calendar.map(el => {
                        return <DashboardCalendar {...el} userFormula={userFormula}/>
                    })
                }
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3 '>
                <Link to={paths.calendar}>
                    <button className='p-3 btn-link-cal'>
                        Посмотреть подробную статистику
                    </button>
                </Link>
            </div>


        </div>
    );
}

export {Dashboard}