import React from 'react'
import NavigationBar from 'components/layout/navigation'
import Footer from 'components/layout/footer'

const Layout = ({ children })=>{
    return (
        <>
            <NavigationBar />
             {children}
            <Footer />
        </>
    )
}

export default Layout