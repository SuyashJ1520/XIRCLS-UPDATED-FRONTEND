import { Circle } from 'react-feather'
import startLogo from '../../assets/Images/Logos/x_white_logo.png'
import centerLogo from '../../assets/Images/Logos/xircls_white_text.svg'

const Sidebar = ({ navCheck, setNavCheck, setNavHover, navHover, navWidth }) => {

  return (
    <div style={{ position: 'fixed', top: '0px', left: '0px', width: navWidth, height: '100vh' }} className="sidebar-container bg-black m-0 transition-smooth"
      onMouseEnter={() => {
        setNavHover(true)
      }}
      onMouseLeave={() => {
        setNavHover(false)
      }}>
      <div className={`d-flex justify-content-between align-items-center py-3`}>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '100%' : `${100 / 3}%`, overflow: 'hidden' }}>
          {!(navHover || navCheck) && <img src={startLogo} alt="logo" height={35} />}</div>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 1}%`, overflow: 'hidden' }}>
          <img className='transition-smooth' src={centerLogo} alt="logo" style={{ scale: (navHover || navCheck) ? '1' : '0.25' }} height={35} />
        </div>
        {(navHover || navCheck) &&
          <div style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 3}%`, overflow: 'hidden' }} className={`d-flex justify-content-end align-self-start transition-smooth px-3`}>
            <input onChange={(e) => {
              setNavCheck(e.target.checked)
            }} type='checkbox' id='nav-check' className='d-none' />
            <label htmlFor='nav-check' className='d-flex justify-content-center align-items-center position-relative' style={{ cursor: 'pointer' }}>
              <Circle size={20} color='white' />
              <Circle size={navCheck ? 12 : 0} className='position-absolute transition-smooth' fill={navCheck ? 'white' : 'black'} />
            </label>
          </div>
        }
      </div>
    </div>
  )
}

export default Sidebar