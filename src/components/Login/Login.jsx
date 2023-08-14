import React from 'react'
import styles from "./Login.module.css"
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useState } from 'react'
const Login = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({

    Email: "",
    Password: ""
  })

  const [errMsg, setErrMsg] = useState("")

  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!value.Email || !value.Password) {
      setErrMsg('Fill all the fields')
      return;
    }

    setErrMsg("")
    setSubmitButtonDisable(true)
    signInWithEmailAndPassword(auth, value.Email, value.Password)
      .then((res) => {
        setSubmitButtonDisable(true)
        navigate("/")

      })
      .catch((err) => {
        setSubmitButtonDisable(false)
        setErrMsg(err.message)

      })
   
  }


  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className=' font-bold text-2xl font-serif'>Login</h1>
        <InputControl onChange={(event) =>
          setValue((prev) => ({ ...prev, Email: event.target.value }))
        } label="Email" placeholder="Enter Email Adress" />

        <InputControl onChange={(event) =>
          setValue((prev) => ({ ...prev, Password: event.target.value }))
        } label="Password" placeholder="Enter Password" />

        <div className={styles.footer}>
          <b className={styles.error}>{errMsg}</b>
          <button disabled={submitButtonDisable} onClick={handleSubmit}>Login</button>
          <p>Already have an account?{""}<span><Link to="/signup">
            Signup
          </Link>
          </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login
