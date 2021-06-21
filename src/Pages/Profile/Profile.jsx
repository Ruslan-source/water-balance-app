import React, {useState} from 'react';
import './syle.sass'
import {useDispatch, useSelector} from "react-redux";
import {waterBalanceActions} from "../../Store/WaterBalance/actions";

function Profile() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.waterBalance.user)

    const [form, setForm] = useState({
        name: '',
        gender: '',
        weight: null,
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const addUser = () => dispatch(waterBalanceActions.setUser(form))


    const UserTrue = () => {
        return <p>Вы вошли</p>
    }

    console.log(form)

    const UserFalse = () => {
        return<>
            <form action="">
                <input type="text" name='name' value={form.name} onChange={changeHandler} className='w-100 mt-3 mb-3 p-3 input-auth' placeholder='Как вас зовут?'/>
                <select name="gender" id="" value={form.gender} onChange={changeHandler} className='w-100 mt-3 mb-3 p-3 input-auth'>
                    <option value="" className='p-3'>Ваш пол</option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                </select>
                <input type="number " name='weight' value={form.weight}  onChange={changeHandler} className='w-100 mt-3 mb-3 p-3 input-auth' placeholder='Ваш вес'/>
            </form>
            <button onClick={addUser} className='w-100 p-4 btn-auth'>
                Создать аккаунт
            </button>
        </>
    }

    return (
        <div className='container mt-4'>
           <div className="row">
               <div className="col-xl-12 text-center w-100 block-title">
                   <h3 className='title-text m-0 p-3'>Регистрация</h3>
               </div>
               <div className="col-xl-6 mt-5">
                   {
                       !!user ? <UserTrue /> : <UserFalse />
                   }
               </div>
               <div className="col-xl-6 mt-5">
                    <h3 className='pt-3'>Информация</h3>
               </div>
           </div>

        </div>
    );
}

export {Profile};
