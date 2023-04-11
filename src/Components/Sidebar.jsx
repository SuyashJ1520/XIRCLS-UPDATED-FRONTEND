import startLogo from '../assets/Images/Logos/x_white_logo.png'
import centerLogo from '../assets/Images/Logos/xircls_white_text.svg'

const Sidebar = ({ navCheck, setNavCheck, setNavHover, navHover, navWidth }) => {

  return (
    <div style={{ position: 'fixed', top: '0px', left: '0px', width: navWidth, height: '100vh' }} className="sidebar-container bg-black m-0 transition-smooth"
      onMouseEnter={() => {
        setNavHover(true)
      }}
      onMouseLeave={() => {
        setNavHover(false)
      }}>
      <div className={`d-flex justify-content-between align-items-center p-3`}>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '100%' : `${100 / 3}%`, overflow: 'hidden' }}>
          {!(navHover || navCheck) && <img src={startLogo} alt="logo" height={35} />}</div>
        <div className='text-center' style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 1}%`, overflow: 'hidden' }}>
          <img className='transition-smooth' src={centerLogo} alt="logo" style={{scale: (navHover || navCheck) ? '1' : '0.25'}} height={35} />
        </div>
        <div style={{ width: !(navHover || navCheck) ? '0px' : `${100 / 3}%`, overflow: 'hidden' }} className={`text-end align-self-start transition-smooth`}>
          {(navHover || navCheck) &&
            <>
              <input onChange={(e) => {
                setNavCheck(e.target.checked)
              }} type='checkbox' id='nav-check' className='d-none' />
              <label htmlFor='nav-check' style={{ cursor: 'pointer' }}>
                <div className="border border-3 rounded-pill d-flex justify-content-center align-items-center" style={{ aspectRatio: '1', width: 20 }}>
                  <div style={{scale: navCheck ? '0.5' : '0'}} className={`rounded-pill bg-white h-100 w-100 transition-smooth`}></div>
                </div>
              </label>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar