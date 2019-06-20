import React from "react";

const Navigation = ({ onRouteChange, isSignedin }) => {
    if(isSignedin){
      return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signOut')} className='b ph3 pv2 ba b--black bg-transparent dim pointer f3 dib'>Sign Out</p>
      </nav>
    )
    } else {
      return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='b ph3 pv2 ba b--black bg-transparent dim pointer f3 dib'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='b ph3 pv2 ba b--black bg-transparent dim pointer f3 dib'>Register</p>
      </nav>
    )
    }
}

export default Navigation;
