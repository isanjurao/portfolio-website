import "./contact.css";
import shake from "./shake.svg"

import {useState} from 'react';
export default function () {
const [message,setMessage] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault();
    setMessage(true) 
  }
  return (
    <div className="contact">
        <div className="left">
        <img className="img" src={shake} alt="" />
        </div>
        <div className="right">
          <div id="bc">
           <h2 className="heading">Contact us</h2>
            <form onSubmit={handleSubmit}>
        <label for="name">NAME </label><br/><br/>
        <input type="text" id="name" class="input" name="Name"/>
        <br/>
        <br/>
        <label for="pnum">PHONE NUMBER</label><br/><br/>
        <input type="text" id="pnum" class="input" name="Contact"/>
        <br/>
        <br/>
        <label for="email">EMAIL</label><br/><br/>
        <input type="text" id="email" class="input" name="Email"/>
        <br/>
        <br/>
        <label for="message ">MESSAGE </label><br/><br/>
        <textarea id="mesg"  class="input" required name="Message" ></textarea>
        <br/>
        <br/>
        <input type="submit" name="submit" id="submit" />
        <input type="reset" name="reset" id="reset"/>   
        {message && <span>Thanks I'll reply soon :)</span>}
    </form>
    </div>
        </div>
    </div>
  );
}
