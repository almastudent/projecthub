import React, { useState } from 'react'
import styles from "./Signup.module.css"
import InputControl from '../InputControl/InputControl'
import { Link ,useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
const Signup = () => {
  const navigate=useNavigate()
  const[value, setValue]=useState({
    Name:"",
    Email:"",
    Password:""
  })

  const [errMsg, setErrMsg]=useState("")

  const [submitButtonDisable,setSubmitButtonDisable] =useState(false);

     const handleSubmit=()=>{
      if(!value.Name || !value.Email|| !value.Password){
        setErrMsg('Fill all the fields')
        return;
      }
     
        setErrMsg("")
        setSubmitButtonDisable(true)
      createUserWithEmailAndPassword(auth, value.Email,value.Password)
      .then( async(res)=>{
        setSubmitButtonDisable(true)
        const user=res.user
       await updateProfile(user,{
          displayName:value.Name
        })
        navigate("/")
      })
      .catch((err)=>{
        setSubmitButtonDisable(false)
        setErrMsg(err.message)
        
      })
      
      
     }

  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className=' font-bold text-2xl font-serif'>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) =>

            setValue((prev) => ({ ...prev, Name: event.target.value }))


            }
            />

        <InputControl
          label="Email"
          placeholder="Enter Email Adress"
          onChange={(event) =>

            setValue((prev) => ({ ...prev, Email: event.target.value }))


            }
            />

        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>

            setValue((prev) => ({ ...prev, Password: event.target.value }))


            }
            />

        <div className={styles.footer}>
          <b className={styles.error}>{errMsg}</b>
          <button disabled={submitButtonDisable} onClick={handleSubmit}>Login</button>
          <p>Already have an account?{""}<span><Link to="/Login">
            Login
          </Link>
          </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Signup
