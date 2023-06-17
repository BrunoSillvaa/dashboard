import { useContext } from 'react'
import { Container } from './styles'
import { Item } from './SidebarItem'

import { IoIosHome, IoIosRocket, IoIosDocument } from 'react-icons/io'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { FaChartLine, FaUser } from 'react-icons/fa'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { GeneralContext } from '../../contexts/GeneralContext'

export function Sidebar() {
  const {sidebar, currentPage, setCurrentPage} = useContext(GeneralContext)

  return (
    <Container className={`${sidebar && 'open'}`}>
      <Item
        title='Home'
        active={currentPage === 'Home'}
        setCurrentPage={setCurrentPage}
        icon={<IoIosHome className='item-icon' />}
      />

      <Item
        title='Tables'
        active={currentPage === 'Tables'}
        setCurrentPage={setCurrentPage}
        icon={<FaChartLine className='item-icon' />}
      />

      <Item
        title='Billing'
        active={currentPage === 'Billing'}
        setCurrentPage={setCurrentPage}
        icon={<BsCreditCard2BackFill className='item-icon' />}
      />

      <Item
        title='RTL'
        active={currentPage === 'RTL'}
        setCurrentPage={setCurrentPage}
        icon={<TbArrowsRightLeft className='item-icon' />}
      />

      <h2>Account Pages</h2>

      <Item
        title='Profile'
        active={currentPage === 'Profile'}
        setCurrentPage={setCurrentPage}
        icon={<FaUser className='item-icon' />}
      />

      <Item
        title='Sign In'
        active={currentPage === 'SignIn'}
        setCurrentPage={setCurrentPage}
        icon={<IoIosDocument className='item-icon' />}
      />

      <Item
        title='Sign Up'
        active={currentPage === 'SignUp'}
        setCurrentPage={setCurrentPage}
        icon={<IoIosRocket className='item-icon' />}
      />

      <div className="box">
        <p>Would like to contact me ?</p>
        <button><a href="https://linkedin.com/in/brunosillvaa/" target='_blank'>Linkedin</a></button>
      </div>
    </Container>
  )
}
