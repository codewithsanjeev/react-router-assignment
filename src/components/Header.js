import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="site-header ">
                <section className='site-logo site-width mx-auto'>
                    <section className='site-header-design'>
                        <Link to="/"> <h1 className='logo-design'>React Router Assignment</h1></Link>
                        <nav>
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"> <li>About</li></Link>
                                <Link to="/contact"><li>Contact</li></Link>
                            </ul>
                        </nav>
                    </section>

                </section>
            </header>
        </>
    )
}

export default Header