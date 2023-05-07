import { Circle, X } from 'react-feather'
import startLogo from '../../assets/Images/Logos/x_white_logo.png'
import centerLogo from '../../assets/Images/Logos/xircls_white_text.svg'
import { useEffect, useState } from 'react'

const Sidebar = ({ windowWidth, setFullBodyWidth, openNav, setOpenNav }) => {
  const [navCheck, setNavCheck] = useState(false)
  const [navHover, setNavHover] = useState(!(windowWidth > 992))
  const [navWidth, setNavWidth] = useState(90)

  useEffect(() => {
    const width = (navCheck || navHover) ? '20%' : '5%'
    setNavWidth(width)
    setFullBodyWidth(navCheck)
  }, [navCheck, navHover])

  return (
    <div style={{ position: 'fixed', top: '0px', left: '0px', width: windowWidth > 992 ? navWidth : openNav ? '17.5rem' : '0rem', height: '100vh' }} className="sidebar-container bg-black m-0 transition-smooth"
      onMouseEnter={() => {
        setNavHover((windowWidth > 992))
      }}
      onMouseLeave={() => {
        setNavHover(!(windowWidth > 992))
      }}>
      {windowWidth > 992 ? (<div className={`d-flex justify-content-between align-items-center py-3`}>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '100%' : `${100 / 3}%`, overflow: 'hidden' }}>
          {!(navHover || navCheck) && <img src={startLogo} alt="logo" height={'30rem'} />}</div>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 1}%`, overflow: 'hidden' }}>
          <img className='transition-smooth' src={centerLogo} alt="logo" style={{ scale: (navHover || navCheck) ? '1' : '0.25' }} height={'30rem'} />
        </div>
        {(navHover || navCheck) &&
          <div style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 3}%`, overflow: 'hidden' }} className={`d-flex justify-content-end align-self-start transition-smooth px-3`}>
            <div onClick={() => setNavCheck(!navCheck)} className='d-flex justify-content-center align-items-center position-relative' style={{ cursor: 'pointer' }}>
              <Circle size={20} color='white' />
              <Circle size={navCheck ? 12 : 0} className='position-absolute transition-smooth' fill={navCheck ? 'white' : 'black'} />
            </div>
          </div>
        }
      </div>) : (
        <div className={`d-flex align-items-center py-3 position-relative`}>
          <div className='text-center' style={{ width: `100%`, overflow: 'hidden' }}>
            <img className='transition-smooth' src={centerLogo} alt="logo" height={'30rem'} />
          </div>
          <div style={{ overflow: 'hidden', position: 'absolute', right: '0px' }} className={`d-flex justify-content-end align-self-start transition-smooth px-3`}>
              <div onClick={() => setNavCheck(!navCheck)} className='d-flex justify-content-center align-items-center position-relative' style={{ cursor: 'pointer' }}>
                <X onClick={() => setOpenNav(false)} size={20} color='white' />
              </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar