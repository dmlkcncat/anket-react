import { Navbar as NNavbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <NNavbar
          fluid={true}
          rounded={true}
          style={{ backgroundColor: '#5F9DCF' }}
        >
          <Link
            to="/"
            className="flex items-center"
            style={{ color: 'white' }}
          >
            KOBİZON ANKET SİSTEMİ
          </Link>
          <NNavbar.Collapse>
            <img
              src="/images/kobibeyaz.png"
              className="mr-3 h-6 sm:h-9"
            />
          </NNavbar.Collapse>
        </NNavbar>
      </div>
    </>
  )
}

export default Navbar
