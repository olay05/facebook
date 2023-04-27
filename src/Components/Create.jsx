import React from 'react'

export default function Create() {
  return (

        <>
        <div className='parental'>
        <div className='face'>
        <h1> Get connected on FB</h1>
         <h4>Click this to enter Home page</h4>
       <button className='hom'><a href="/">Home</a></button> 
       </div>

       <div className='wo'>
       <form action="" id='form'> 
         <h1 ><strong>Signup  </strong></h1> 
            <h5>It's quick and easy.</h5>

            <hr />

         <input type="text" id='first' placeholder='First name'/>  <input type="text" id='first' placeholder='Last name'/> <br />
        
         <input type="text" id='mail' placeholder='Mobile number or email address'/> <br />
         <input type="text" id='mail' placeholder='New password'/>
         <p><strong>Date of birth</strong></p>
         <div class="gen">
         <select name="" id="gen">
         <option value="">1</option>
         <option value="">2</option>
         <option value="">3</option>
         <option value="">4</option>
         <option value="" selected>5</option>
         <option value="">6</option>
         <option value="">7</option>
         <option value="">8</option>
         <option value="">9</option>
         <option value="">10</option>
         </select>

         <select name="" id="gen">
         <option value="">Jan</option>
         <option value="">Feb</option>
         <option value="">Mar</option>
         <option value="" selected>April</option>
         <option value="">May</option>
        <option value="">June</option>
         <option value="">July</option>
         <option value="">August</option>
         <option value="">Sep</option>
        <option value="">Oct</option>
         </select>

         <select name="" id="gen">
         <option value="">2010</option>
         <option value="">2011</option>
         <option value="">2012</option>
        <option value="">2013</option>
         <option value="">2014</option>
         <option value="">2015</option>
         <option value="">2016</option>
         <option value="">2017</option>
         <option value="">2018</option>
         <option value="">2019</option>
         <option value="">2020</option>
         <option value="">2021</option>
         <option value="">2022</option>
         <option value="" selected>2023</option>
         <option value="">2024</option>
         <option value="">2025</option>
         <option value="">2026</option>
        <option value="">2027</option>
         </select>
        </div>

         <p><strong>Gender </strong></p>
         <div className="gend">
        <div id='gen'>
          Female <input type="radio" id='gen' placeholder='Female' />
          </div>

          <div id='gen'> 
         Male <input type="radio" id='gen' placeholder='Female' />
           </div>

          <div id='gen'>
          Custom <input type="radio" id='gen' placeholder='Female' />
           </div>
         </div>


        
        <p>People who use our service may have uploaded your contact <br /> information to Facebook Learn more</p>

       <p>By clicking Sign Up you agree to our Terms. Privacy Policy <br /> and Cookies Policy You may receive SMS notifications from us can opt out at any time. </p>

        <button className='sign'>Sign Up</button>
        </form>
       </div>

        </div>

       </>
    );
  }
  


  
