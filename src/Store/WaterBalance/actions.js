export const waterBalanceActionTypes = {
    SET_MONTH: "WATER.SET_MONTH",
    SET_CALENDAR: "WATER.SET_CALENDAR",
    SET_DAY: "WATER.SET_DAY",
    CHECK_DAY: "WATER.CHECK_DAY",
    ADD_WATER: "WATER.ADD_WATER",
    SET_USER: "WATER.SET_USER",
    TIME_MANAGEMENT: "WATER.TIME_MANAGEMENT"
}



export const waterBalanceActions = {
    setMonth: () => ({type: waterBalanceActionTypes.SET_MONTH}),
    setCalendar: () => ({type: waterBalanceActionTypes.SET_CALENDAR}),
    setDay: (payload) => ({type: waterBalanceActionTypes.SET_DAY,payload}),
    addWater: (payload) => ({type: waterBalanceActionTypes.ADD_WATER, payload}),
    setUser: (payload) => ({type: waterBalanceActionTypes.SET_USER, payload}),
    timeManagement: () => ({type: waterBalanceActionTypes.TIME_MANAGEMENT})
}