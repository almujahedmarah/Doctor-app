import React from 'react'

export default function Sinup() {
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
            <button className="singup1" type="submit">Login</button>
        </div>
    )
}
