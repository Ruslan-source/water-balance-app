import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {waterBalanceActions, waterBalanceActionTypes} from "./Store/WaterBalance/actions";
import {Routing} from "./Routing/Routing";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(waterBalanceActions.setMonth())
    dispatch(waterBalanceActions.setCalendar())
    dispatch(waterBalanceActions.setDay())
  },[])

  return <Routing />

}

export default App;
