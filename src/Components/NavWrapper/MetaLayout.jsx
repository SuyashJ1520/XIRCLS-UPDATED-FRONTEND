import React, { useState } from 'react'
import Sidebar from './Sidebar'
import NavHeader from './NavHeader'

const MetaLayout = ({children}) => {

    const [openNav, setOpenNav] = useState(false)

    return (
        <div className="position-relative">
            <Sidebar setOpenNav={setOpenNav} />
            <div className='transition-smooth' style={{ marginLeft: 'auto', width: openNav ? `calc(80%)` : `calc(95%)` }}>
                <NavHeader />
                <div className="px-3">{children}</div>
            </div>
        </div>
    )
}

export default MetaLayout