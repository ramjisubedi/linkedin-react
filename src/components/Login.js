import React, {useState} from 'react'
import '../css/login.css';
import { auth } from '../firebase';
import {useDispatch} from 'react-redux'
import {loginUser,logoutUser} from '../features/userSlice'
import {createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword} from 'firebase/auth'


const Login = () => {

    const [signup, setSignup] = useState();
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

// Register user
    const register = async (e)=>{
        e.preventDefault();
        if(!name){
            return alert("Name Required");
        };
        if(!photoURL){
            return alert("Photo Required");
        };
        if(!email){
            return alert("Email Required");
        };
        if(!password){
            return alert("Password Required");
        };
        try{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const users = userCredential.user;
            updateProfile(users,{
                displayName: name,
                photoURL: photoURL
                })
                .then(() => {
                    dispatch(loginUser({
                        email:userCredential.user.email,
                        uid: userCredential.user.uid,
                        photoURL:userCredential.user.photoURL,
                        displayName: userCredential.user.displayName,
                    }))
                })
                .catch((error)=>{alert(error.message)
            })  
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;        
            }
        }

        // Login user

        const login = (e)=>{
            e.preventDefault();
            if(!email){
                return alert("Please enter email")
            }

            if(!password){
                return alert("Please enter password")
            }

            try{
                const logindetails =  signInWithEmailAndPassword(auth,email,password)
                .then((loginUsers)=>{
                    dispatch(loginUser({
                        email:loginUsers.user.email,
                        uid: loginUsers.user.uid,
                        photoURL:loginUsers.user.photoURL,
                        displayName: loginUsers.user.displayName,
                    }))
                })
            }catch(error){

            }
        }

  return (
    <div className="loginScreen">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
        
    {
        signup===true ? (
<form onSubmit={register}>
            <input type="text" placeholder="Full Name" onChange={e=>setName(e.target.value)} />
            <input type="text" placeholder="Profile URL" onChange={e=>setPhotoURL(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Signup" />
    <h4>Already a member? <span onClick={e =>setSignup(false)}>Login Here</span></h4>
        </form>
        ):(
            <form onSubmit={login}>
           
           <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Login" />
    <h4>Not a member? <span onClick={e =>setSignup(true)}>Register Here</span></h4>
        </form>
        )
    }
   
    </div>
  )
}

export default Login