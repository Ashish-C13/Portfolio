import React from 'react'
import ResumeImg from 'C:/React app/portfolio/src/portfolio-assets/resume-190916.jpg'
export default function Resumer() {
    return (
        <>
            <section id='Resume' className='resume'>
                <div className='resume-name'>
                    <h1>See my Resumea <span className='resume-link'><a href='https://drive.google.com/file/d/1sMQMMnG-H6AapZTVAvTnchwiKSgzSJxE/view?usp=drivesdk'>HEAR</a></span></h1>
                </div>
                <div className='resume-img'>
                    <img className='r-img' src={ResumeImg}></img>
                </div>
            </section>
        </>
    )
}
