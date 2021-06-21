import React from 'react';
import './style.sass'
import {Link} from "react-router-dom";
import {paths} from "../../constans/route.constants";
import {AiOutlineCalendar, AiOutlineFieldTime, CgProfile, FiMenu} from "react-icons/all";

function Menu() {

    const menuItem = [
        {
            path: paths.home,
            params: '/',
            icon: <FiMenu className='icon text-white m-3 nav-item'/>
        },
        {
            path: paths.calendar,
            icon: <AiOutlineCalendar className='icon text-white m-3'/>
        },
        {
            path: paths.profile,
            icon: <CgProfile className='icon text-white m-3'/>
        },
        {
            path: '',
            icon: <AiOutlineFieldTime className='icon text-white m-3 '/>
        },
    ]

    const MenuList = () => {
        return  menuItem.map(el => {
            return <Link  to={el.path} key={el.path}>
                    <div className='box-icon nav-item'>
                        {el.icon}
                    </div>
                </Link>

        })
    }


    return (
        <div className='container-fluid menu'>
           <div className="container menu-container">
               <div className='row d-flex justify-content-between mt-4'>
                   <div className="col-xl-3 col-lg-3 col-12 menu-logo d-flex align-items-center justify-content-center ">
                      <Link to={paths.home}><h2 className='menu-logo__text pt-3 pb-3'>Water-Balance</h2></Link>
                   </div>
                   <div className="col-xl-3 col-lg-4 col-12 d-flex align-items-center justify-content-center">
                      <MenuList />
                   </div>
               </div>
           </div>
        </div>
    );
}

export {Menu};