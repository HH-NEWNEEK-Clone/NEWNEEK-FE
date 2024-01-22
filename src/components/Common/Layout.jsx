import React from 'react'
import Nav from './Nav'
import Router from '../../shared/Router'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Nav />
            <Router />
            <Footer />
        </div>
    )
}

export default Layout