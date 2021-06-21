import React from 'react';

function WaterList(props) {
    const {water, icon, name, addWater} = props
    return (
        <div className='col-xl-2 col-sm-6' key={water}>
            <div className='p-1 mt-2 mb-2 text-center water-box'>
                {icon}
                <p className='text mt-3'>{name}</p>
                <p className='text mt-3'>{water} мл</p>
                <button onClick={() => addWater(water)} className='mb-3 w-75 water-btn pt-1 pb-1 '>
                    Выпить
                </button>
            </div>
        </div>
    );
}

export {WaterList};
