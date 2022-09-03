import React, {useState} from 'react'
import '../css/login.css';

const Login = () => {

    const [signup, setSignup] = useState();
  return (
    <div className="loginScreen">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
        
    {
        signup===true ? (
<form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Profile URL" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Signup" />
    <h4>Already a member? <span onClick={e =>setSignup(false)}>Login Here</span></h4>
        </form>
        ):(
            <form>
           
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
    <h4>Not a member? <span onClick={e =>setSignup(true)}>Register Here</span></h4>
        </form>
        )
    }
   
    </div>
  )
}

export default Login