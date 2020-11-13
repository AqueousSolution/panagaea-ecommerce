import React from 'react'

function Nav(){
    return(
        <nav>
            <div className="left-nav">
                <img src="./lumin-logo.png" alt="logo" className="lumin-logo"/>
            
                <ul className="nav-items">
                    <li className="nav-items-links">Shop</li>
                    <li className="nav-items-links">Learn</li>
                    
                </ul>
            </div>
            <div className="right-nav">
                <ul className="nav-options">
                    <li className="nav-options-links">Account</li>
                    <li className="nav-options-links">Cart</li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav