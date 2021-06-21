import {month} from "../../db";
import {waterBalanceActionTypes} from "./actions";

const initialState = {
    user: false,
    userFormula: null,
    time: 1,
    month: month,
    currentMonth: {},
    calendar: null,
    currentDay: null,
    previousDays: []
}


export const waterBalanceReducers = (state = initialState, action) => {
    switch (action.type) {

        case waterBalanceActionTypes.SET_USER:
            const checkUserValue = !!action.payload.name && !!action.payload.weight && !!action.payload.gender && action.payload
            const generateFormula = checkUserValue && action.payload.gender === 'Women' ? action.payload.weight * 0.03 * 1000 : action.payload.weight * 0.04 * 1000

            return {...state,user: checkUserValue, userFormula: generateFormula}

        case waterBalanceActionTypes.SET_MONTH:
            const check = state.month.filter(el => el.score === new Date().getUTCMonth() + 1)
            return {...state, currentMonth: check}

        case waterBalanceActionTypes.SET_CALENDAR:
            let arrCalendar = []
            state.currentMonth.map(el => {
                for (let i = 1; i < el.days + 1; i++) {
                    arrCalendar.push({day: i, water: 0, done: false, message: '',})
                }
            })
            return {...state, calendar: arrCalendar,}

        case waterBalanceActionTypes.SET_DAY:
            //new Date().getDate()
            const checkDay = state.calendar.filter(el => el.day === state.time)
            return {...state, currentDay: checkDay}

        case waterBalanceActionTypes.ADD_WATER:

            //new Date().getDate()
            const checkDayWater = state.calendar.filter(el => el.day === state.time)

            //new Date().getDate()
            const addWater = !!checkDayWater && state.calendar.map(el => el.day === state.time && !!state.user ? el.water < state.userFormula ? {
                ...el,
                water: el.water + action.payload
            } : {...el, done: el.done = true} : el)

            return {...state, calendar: addWater}


        case waterBalanceActionTypes.TIME_MANAGEMENT:
            const addTime = state.time + 1
            return {...state, time: addTime}

        default:
            return state
    }
}
