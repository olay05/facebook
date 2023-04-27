import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";

// import face from '../Components/images/fb-new-login.png'




export default function Home() {

const navigate = useNavigate();
   return (
       <> 
       <div className='parent'>
        <div className="face">
        <h1>facebook</h1>
        <h3>Connect with friends and the world <br/>
            around you on Facebook</h3>
        </div>
           

           <div className="we">
            <form action="" id="pop">
                <input type="text" id="email" placeholder="Email or Phone Number" /> <br />
                <input type="text" id="pass" placeholder="Password" /> <br />
                <button a href="New page" id="log">log in</button> <br />
                <a href="recovery page" id="for">Forgot account?</a> <br />
                <hr />
                <button onClick= {() => navigate ('/create')} >Create New Account</button> <br />
                

            </form>

            <p><strong>Create a page </strong> for a celebrity, brand or business</p>
           </div>

           </div>
       </>
        )
       }