import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.Config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const style = {
  fontSize: '20px',
  backgroundColor:'#EA5455',
  fontFamily:'Arial',
  border:'none',
  borderRadius: '20px',
  height:'50px',
  width:'100px',
  marginTop: '11px',
  hover: 'pointer'
}
const style1 = {
  fontSize: '20px',
  backgroundColor:'#EA5455',
  border:'none',
  borderRadius: '5px',
  hover: 'pointer'
}


function Login() {
  const [newUser, setNewUser] =  useState(false);
  const [user, setUser] = useState({
    isSignIn : false, 
    email : '',
    name : '',
    photoURL : '',

})
//ekhan theke
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    //ei porjon to web theke nibo

    .then(result => {
      const {displayName, email, photoURL} = result.user;
      const userSignIn = {
        isSignIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL

      }
      //Important
      setUser(userSignIn);

      console.log(displayName, email, photoURL);
    })

    .catch (error => {
      console.log(error)
      console.log(error.message)
    })
  };

 const handleSingOut = (() => { 
   firebase.auth().signOut()
   .then (res => {
     const signedOutUser = {
      isSignIn : false, 
      email : '',
      name : '',
      photoURL : '',
      password: '',
      error:"",
      success: false

     }
     setUser(signedOutUser);
    })
    
    .catch (error => {
      
    })
 });
  
//To authenticate your Email and password is valid!!!
 const handleInputFiled =(event)=> {
   let isFromValid = true;
   console.log(event.target.name, event.target.value)

   if(event.target.name === "email"){
    isFromValid= /\S+@\S+\.\S+/.test(event.target.value);
   }

   if(event.target.name === "password"){
    isFromValid = event.target.value.length > 8;
  } 
  if (isFromValid){
    const newUserInfo = {...user};
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  }
  
 }

 const  [ userLoggedIn, setUserLoggedIn] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

 const handleSubmit = (event)=> {

  if(newUser && user.email && user.password){ 
                       //This lien is from firebase website!!!!
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user}
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      updateUserName(user.name);
    })
    .catch(error => {
      const newUserInfo = {...user}
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      updateUserName(user.name);
      setUser(newUserInfo);
    });
  }
    if(!newUser && user.email && user.password){ 
      //This lien is from firebase website!!!!
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success = true;
        setUser(newUserInfo);
        setUserLoggedIn(newUserInfo);
        history.replace(from);
        
      })

    .catch(error => {
      const newUserInfo = {...user}

      newUserInfo.error = error.message;
      newUserInfo.success = false;

      setUser(newUserInfo);
    });
    
  }
  event.preventDefault();

}

   const updateUserName = name =>{
     const user = firebase.auth().currentUser;

     user.updateProfile({
       displayName: name

     }).then(function(){

     }).catch(function(error){

     });
   }
 
 

  return (
    <div style={{textAlign: 'center'}}>
      { user.isSignIn ? <button onClick = {handleSingOut} style = {style}> Sign Out</button> :
        <button onClick = {handleSignIn} style = {style}> Sign in</button> 
      }
      {
       user.isSignIn && <div> 
            <h1> Welcome, {user.name}</h1>
            <h2>Your email address is: {user.email}</h2>
            <img src={user.photoURL} alt=""/>
       </div>
       
       
      }


      <h1>Our own Authentication Bro! :D</h1>
     <input type="checkbox" onChange = {()=>setNewUser(!newUser)} name="newUser"/>
     <label htmlFor="newUser"> New commer Sign in</label> <br/> <br/>
    
    <form action="">
      {newUser && <input name="name" type="text" onBlur = {handleInputFiled} placeholder="Your Name"/>} <br/> <br/>

      <input type="text" name="email"  onBlur = {handleInputFiled} placeholder="Your email address" required/>
      <br/>  <br/>
      <input type="password" name="password" onBlur = {handleInputFiled}  placeholder="Your password" required/>
      <br/>  <br/>
      <input style={style1} type="submit" onClick = {handleSubmit} value="Submit"/>
    </form>
     <p style ={{color: 'red'}}>{user.error}</p>
     {user.success && <p style ={{color: 'green'}}>  Fortunately, You are logged In</p>}

    </div>

    
  );
}

export default Login;
