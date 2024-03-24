import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Paragraph</p>
      </div>
      <br />
      <div>
        <h2>Buttons</h2>
      </div>
      <div>
        <h3>Main Button</h3>
        <button className="main-button">
          Button  
        </button>
      </div>
      <div>
        <h3>Alternate Button</h3>
        <button className="alt-button">
          Alt Button
        </button>
      </div>
      <br />
      <div>
        <h2>Form</h2>
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground" action="#">
          <label htmlFor="email">Email</label>
          <input type='text' id='email' name="email" placeholder="" required />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name="password" placeholder="" required />
          <button className="main-button">Login</button>
          <button className="alt-button">Create Account</button>
        </form>
      </div>
      <br />
      <div>
        <h2>Success, Warning, & Error Messages</h2>
        <div className="success-message">Success Message</div>
        <div className="warning-message">Warning Message</div>
        <div className="error-message">Error Message</div>
      </div>
      <br />
      <div>
        <h2>Navigation</h2>
        <nav className='nav-item'>
          <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <br />
    </>
  )
}

export default page