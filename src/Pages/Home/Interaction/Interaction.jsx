import React from 'react';
import './style.sass'
import {useSelector} from "react-redux";
import {ProgressBar} from "react-bootstrap";
function Interaction() {

    const currentDay = useSelector(state => state.waterBalance.currentDay)
    const userFormula = useSelector(state => state.waterBalance.userFormula)
    const user = useSelector(state => state.waterBalance.user)

    return (
        <div className='row '>
            <div className="col-xl-12 hello-box ">
                <div className="row  p-5 ">
                    <div className="col-xl-6  text-start">
                        <h4 className='pb-2'>Привет {!!user && user.name}</h4>
                        {
                            !!user ?  <p>Я твой помощник, который следит за балансом воды в твоем организме.
                                Следуй моим советам и твой организм скажет тебе спасибо!
                            </p> :<>
                                <p>Я помогу тебе вести учет, но для этого необходимо авторизоваться и ввести актуальные данные</p>
                                <button className='interaction-btn p-2 w-100 mb-2'>
                                    Авторизоваться
                                </button>
                            </>
                        }

                    </div>
                    <div className="col-xl-6">
                        <h5>Сегодня ты выпил: </h5>
                        {
                          !!currentDay && currentDay.map(el => {
                                return <div key={el.day}>
                                    <p>Число: {el.day}</p>
                                    <p className='m-0'>Вы выпили: {el.water}</p>
                                    <ProgressBar now={el.water / userFormula * 100} className='mt-2 mb-2'/>
                                    {el.message}
                                    <p>Необходимо выпить: {!!userFormula && userFormula}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Interaction};