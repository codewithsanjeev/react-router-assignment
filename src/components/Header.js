import React from 'react'

function Header() {
    return (
        <>
            <header className="site-header">
                <section className='site-logo site-width mx-auto'>
                    <h1>React Router Assignment</h1>
                </section>
                <section>
                    <nav className='site-width mx-auto'>
                        {/* <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"> <li>About</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul> */}
                        <ul>
                            <li> <a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header