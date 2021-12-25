import React from 'react'
import NavigationBar from 'components/layout/navigation'
import Footer from 'components/layout/footer'

const Layout = ({ children })=>{
    return (
        <div className='bg-[#50f3fa]'>
            <NavigationBar />
            {children}
            <Footer />
        </div>

    )
}

export default Layout