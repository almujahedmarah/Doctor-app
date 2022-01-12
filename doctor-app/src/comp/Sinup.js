import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Sinup() {
    const navigate= useNavigate()

    const gotoLogin =()=>{
        navigate('/Login')

    }

    return (
        <div className='logsinup'>
            <div className="sup-main">
            <div className="input">
                <h2>Singup</h2>
                <div className="oo">
            <div >
            <input type="text" placeholder="name" className="name" />
            <div className="ss-in"> 
            <input type="email" placeholder="email" className="name"/>
            </div>
            </div>
            <div className="s-input">
            <input type="password" placeholder="password" className="name"/>
            </div>
            </div>
            <button className="singup" type="submit">Singup</button>
            </div>
            </div>
            <button className="singup" type="submit" onClick={()=>gotoLogin()} >Login</button>
        </div>
    )
}
