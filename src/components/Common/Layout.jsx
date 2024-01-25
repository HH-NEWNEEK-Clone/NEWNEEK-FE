import React from 'react'
import NavBar from './NavBar'
import Router from '../../shared/Router'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <NavBar />
            <Router />
            <Footer />
        </div>
    )
}

export default Layout