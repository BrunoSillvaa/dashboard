import { Container } from './styles'

import { IoIosSearch } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { FaBell, FaUser } from 'react-icons/fa'

export function Navbar() {
  return (
    <Container>
      <h2>Pages / <span>Home</span></h2>

      <div className="right-side">
        <div className="search-wrapper">
          <IoIosSearch className='icon'/>
          <input type="text" placeholder='Type here...'/>
        </div>

        <a href="#"><FaUser className='icon'/></a>
        <a href="#"><BsFillGearFill  className='icon'/></a>
        <a href="#"><FaBell  className='icon'/></a>
      </div>
    </Container>
  )
}