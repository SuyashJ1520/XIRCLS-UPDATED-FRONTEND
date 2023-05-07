import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import NavHeader from './NavHeader'

const MetaLayout = ({ children }) => {

    const [fullBodyWidth, setFullBodyWidth] = useState(false)

    const [openNav, setOpenNav] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [])

    return (
        <div className="position-relative">
            <Sidebar openNav={openNav} setOpenNav={setOpenNav} windowWidth={windowWidth} setFullBodyWidth={setFullBodyWidth} />
            <div className='transition-smooth' style={{ marginLeft: 'auto', width: windowWidth <= 992 ? '100%' :  fullBodyWidth ? `calc(80%)` : `calc(95%)` }}>
                <NavHeader setOpenNav={setOpenNav} windowWidth={windowWidth} />
                <div className="px-3">{children}</div>
            </div>
        </div>
    )
}

export default MetaLayout