import React from 'react';
import './style.sass'
import {useDispatch} from "react-redux";
import {waterBalanceActions} from "../../../Store/WaterBalance/actions";
import {IoWaterOutline} from "react-icons/all";
import {WaterList} from "./WaterList";

function AddWater() {
    const dispatch = useDispatch()
    const water = [
        {
            name: 'Глоток воды',
            water: 100,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
        {
            name: 'Стакан воды',
            water: 300,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
        {
            name: 'Маленькая бутылка',
            water: 500,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
        {
            name: 'Средняя бутылка',
            water: 1000,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
        {
            name: 'Большая бутылка',
            water: 1500,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
        {
            name: 'Огромная бутылка',
            water: 5000,
            icon: <IoWaterOutline className='icon-water mt-3'/>
        },
    ]

    const addWater = (water) => {
        dispatch(waterBalanceActions.addWater(water))
        dispatch(waterBalanceActions.setDay())
    }



    return (
        <div className='row mt-5'>
            {
                water.map(el => {
                    return <WaterList {...el} addWater={addWater}/>
                })
            }
        </div>
    );
}

export {AddWater};