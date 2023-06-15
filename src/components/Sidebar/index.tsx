import { useState } from 'react'
import { Container } from './styles'
import { Item } from './SidebarItem'

import { IoIosHome } from 'react-icons/io'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { FaChartLine } from 'react-icons/fa'
import { TbArrowsRightLeft } from 'react-icons/tb'

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <Container>
      <Item
        title='Home'
        active={activeItem === 'Home'}
        setActiveItem={() => setActiveItem('Home')}
        icon={<IoIosHome className='item-icon' />}
      />

      <Item
        title='Tables'
        active={activeItem === 'Tables'}
        setActiveItem={() => setActiveItem('Tables')}
        icon={<FaChartLine className='item-icon' />}
      />

      <Item
        title='Billing'
        active={activeItem === 'Billing'}
        setActiveItem={() => setActiveItem('Billing')}
        icon={<BsCreditCard2BackFill className='item-icon' />}
      />

      <Item
        title='RTL'
        active={activeItem === 'RTL'}
        setActiveItem={() => setActiveItem('RTL')}
        icon={<TbArrowsRightLeft className='item-icon' />}
      />
    </Container>
  )
}
