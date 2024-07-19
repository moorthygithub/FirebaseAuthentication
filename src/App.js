//Fire base
//useREf()

import { useRef, useState } from "react";
import { signUp,signIn,logOut,useAuth } from "./Fire";
function App(){

  const data=useAuth()

  const [loading,setLoading]=useState(false)

  const email=useRef()
  const password=useRef()


  async function handleSignup(){

    
      try{
        setLoading(true)
      await signUp(email.current.value,password.current.value)
      }
  
  catch{
    setLoading(false)
   

  }
  }



  return(
    <div>
      <center>
        <h1>Fire-Base</h1>
        <form>
          <h1>CurrentUser:{data?true:false.email}</h1>
          <label>
            EmailId:
          </label>

          <input type="email" ref={email}></input>

          <br></br><br></br>
          <label>Password:</label>

          <input type="password" ref={password}></input>

          <br></br><br></br>
          <button onClick={handleSignup}>SignUP</button>
          <button>SignIn</button>
          <button>LogOut</button>
        </form>
      </center>
    </div>
  )
}
export default App;
