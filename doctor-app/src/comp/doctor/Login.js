import React from 'react'

export default function Login() {
    return (
        <div>
           <div className="sup-main">
            <div className="input">
                <h2>Login</h2>
                <div className="oo">
            <div >
            <input type="email" placeholder="email" className="name" />
            </div>
            <div className="s-input">
            <input type="password" placeholder="password" className="name" />
            </div>
            </div>
            <button className="singup" type="submit" >Login</button>
            </div>
            </div>
        </div>
    )
}
