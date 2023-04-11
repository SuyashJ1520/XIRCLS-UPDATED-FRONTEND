import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import NavHeader from './NavHeader'

const MetaLayout = () => {

    const [navCheck, setNavCheck] = useState(false)
    const [navHover, setNavHover] = useState(false)
    const [navWidth, setNavWidth] = useState(90)

    useEffect(() => {
        const width = (navCheck || navHover) ? '20%' : '5%'
        setNavWidth(width)
    }, [navCheck, navHover])

    return (
        <div className="position-relative">
            <Sidebar navWidth={navWidth} setNavWidth={setNavWidth} navCheck={navCheck} setNavCheck={setNavCheck} navHover={navHover} setNavHover={setNavHover} />
            <div className='transition-smooth' style={{marginLeft: 'auto', width: navCheck ?`calc(80%)` : `calc(95%)`}}>
                <NavHeader/>
            </div>
        </div>
    )
}

export default MetaLayout