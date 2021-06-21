import React from 'react';
import './style.sass'
import {Dashboard} from "./Dashboard";
import {Interaction} from "./Interaction";
import {AddWater} from "./AddWater";


function Home() {

    return (
        <div className='container-fluid mt-4 '>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <Dashboard />
                    </div>
                    <div className="col-xl-8">
                        <Interaction />
                    </div>
                    <div className="col-xl-12">
                        <AddWater />
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home};