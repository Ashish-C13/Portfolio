import React from 'react'
import AboutImg from 'C:/React app/portfolio/src/portfolio-assets/about-me-landing-page.png'
export default function About() {
  return (
    <>
      <section id='about' className='about'>
        <div className='about-img'>
          <img className='a-img' src={AboutImg}></img>
        </div>
        <div className='about-name'>
          <h1 className='about-me-name'>About Me:</h1>
          <p className='about-me'>
            {/* <ol>
              <li>as</li>Hi, I'm ASHISH, a passionate front-end
              developer eager to bring ideas to life through
              clean and responsive web interfaces.Graduated
              with a degree in B.Sc-Mathematics in 2024.
              I have a solid foundation in HTML, CSS,
              and JavaScript, along with modern
              frameworks React JS.
            </ol> */}
            <table>
              <tr>
                <td>
                  Hi, I'm ASHISH, a passionate front-end
                  developer eager to bring ideas to life through
                  clean and responsive web interfaces.
                  Graduated with a degree in B.Sc-Mathematics in 2024.
                </td>
              </tr>
              <tr>
                <td>
                  I have a solid foundation in HTML, CSS,
                  and JavaScript, along with modern
                  frameworks React JS.
                </td>
              </tr>
            </table>
          </p>
        </div>

      </section >
    </>
  )
}
