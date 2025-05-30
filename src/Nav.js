import React from 'react'
export default function Nav() {
  return (
    <header className='nav'>
        <h1 className='portfolio'>Portfolio</h1>
        <div className='me'>
            <ul className='category' >
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#Project'>Project</a></li>
                <li><a id='Contact'>Contact</a></li>
                <li className='menu'>=</li>
            </ul>
        </div>
    </header>
  )
}