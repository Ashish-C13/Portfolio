import React from 'react'
import MainImg from 'C:/React app/portfolio/src/portfolio-assets/main-img.png'
export default function Main() {
    return (
        <>
            <section id='main' className='main'>
                <div className='name'>
                    <h1>Hi,<br />MYSELF,<span className='na' > ASHISH</span><span className='fd'>I'M A FRONTEND DEVELOPER</span></h1>
                </div>
                <div className='main-img'>
                    <img className='m-img' src={MainImg}></img>
                </div>
            </section>
        </>
    )
}
