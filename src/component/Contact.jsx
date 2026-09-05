import React from 'react'
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68432cbb-7cba-41ed-9b41-abc00838515c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    Swal.fire({
      title: "Success",
      text: "Message send suffessfully.",
      icon: "success"  
    });
    event.target.reset();
    }
  };

  return (
   
    <section id="contact">
      <h1><center>Contact me</center></h1>
      <form onSubmit={onSubmit}>
      <div className='Box'>
        <div className='upper'>
          <input type="text" placeholder='  Your full name' className='hover' name='name' required/>
          <input type="email" placeholder='  Your email' className='hover' name='email' required/>
        </div>
        <div className='upper'>
          <input type="number" placeholder='  Your Phone number' className='hover' name='number' required/>
          <input type="text" placeholder='  Your Subject' className='hover' name='message' required/>
        </div>
        <div className='lower' >
          <textarea name='meassage' placeholder=' Write your messages'/>
        </div>
        <center><button className='btn' type="submit" >Send messages</button></center>
      </div>
      </form>
    </section> 
  )
}

export default Contact
