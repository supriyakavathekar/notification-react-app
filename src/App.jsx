import { useState } from "react"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  const [warning, setwarning] = useState(true)
  // samja ethe false ala tr te disnar nahi
  const notify = () => toast("it is good ");  

  function submitHandler(e) {
    e.preventDefault()
    alert("something went wrong")
  }

  return (
    <>
      
      <div className="app">
        <form className="card" onSubmit={submitHandler}>
         {warning && <div className="warning">I am warning</div>}
          <input type="text" placeholder="email" />
          <input type="password" name="pass" placeholder="Password" id="" />
         <button type="submit">submit</button>
        </form>
      </div>
     

      <div>
        
        <ToastContainer />
        <button onClick={notify}>Notify!</button>
      </div>

    </>
  )
}

export default App
