import { useContext } from 'react'

import { Container, Hamburguer } from './styles'

import { IoIosSearch } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { FaBell, FaUser } from 'react-icons/fa'
import { GeneralContext } from '../../contexts/GeneralContext'

export function Navbar() {
  const {sidebar, setSidebar, currentPage} = useContext(GeneralContext)

  return (
    <Container>
      <h2>
        Pages / <span>{currentPage}</span>
      </h2>

      <div className='right-side'>
        <div className='search-wrapper'>
          <IoIosSearch className='icon' />
          <input type='text' placeholder='Type here...' />
        </div>

        <a href='#'>
          <FaUser className='icon' />
        </a>
        <a href='#'>
          <BsFillGearFill className='icon' />
        </a>
        <a href='#'>
          <FaBell className='icon' />
        </a>

        <Hamburguer sidebar={sidebar} onClick={() => {setSidebar(!sidebar)}}>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </Hamburguer>
      </div>
    </Container>
  )
}
