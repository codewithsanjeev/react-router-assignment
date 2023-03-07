import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Body() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>React Router Assignment</title>
            </Helmet>
            <div className="site-body">
                <section className='site-width mx-auto home-hero-section'>
                    <section className='home-text'>
                        <h2>AI is the next Big Things</h2>
                        <p> Artificial Intelligence (AI) is transforming the way we live and work, and it has the potential to be the next big thing that changes our world. AI is a technology that can enable machines to learn, reason, and solve problems on their own, without the need for human intervention. It has already been integrated into many aspects of our daily lives, such as virtual assistants, predictive analytics, and personalized marketing.</p>
                        <Link to="/contact" className='btn-contact'>Contact Us</Link>
                    </section>

                    <img src='./images/ai.png' alt='Some Data' />
                </section>
            </div>
        </>
    )
}

export default Body