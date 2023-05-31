import React from 'react'
import user from '../img/profile-icon-orange-symbol-soccer-ball-football-team-sport-transparent-png-1014106-removebg-preview.png'
import '../css/Form.css'

export default function Form() {
  function openPage() {
    var email = document.querySelector('.emailInp').value
    var password = document.querySelector('.PasswordInp').value
    if (email == "qwerty" && password == "123123") {
      sessionStorage.setItem("page", 2);
      window.location = "/";
    } else if (email !== "qwerty" && password == "123123") {
      alert('login notori, parol tori')
    }
    else if (email == "qwerty" && password !== "123123") {
      alert('parol notori, login tori')
    }
    else {
      alert('not');
    }
  }
  return (
    <div className='biggForm'>
      <div className='homeFormes'>
        <img src={user} /><br />
        {/* <label>Email</label><br /> */}
        <input placeholder='Email' className='emailInp' type='text' /><br />
        {/* <label>Password</label><br /> */}
        <input placeholder='Password' className='PasswordInp' type='Password' />
        <button className='kirissh' onClick={() => openPage()}>Kirish</button>
      </div>
    </div>
  )
}
