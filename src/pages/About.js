import React from 'react'
import { Helmet } from "react-helmet";

function About() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
            </Helmet>
            <div className="site-body">
                <section className='site-width mx-auto'>
                    <h2 className='text-center heading'>About Us</h2>
                </section>
            </div>
        </>
    )
}

export default About