import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
            </Helmet>
            <div className="site-body">
                <section className='site-width mx-auto'>
                    <h2 className='text-center heading'>Contact Us</h2>
                </section>
            </div>
        </>
    )
}

export default Contact