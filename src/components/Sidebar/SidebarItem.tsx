import { SidebarItem } from './styles';
import { ReactNode } from 'react'

interface SidebarItemProps {
  title: string,
  icon: ReactNode,
  active: boolean,
  setActiveItem: () => void
}

export function Item({title, icon, active, setActiveItem}: SidebarItemProps) {
  return (
    <SidebarItem className={active ? 'active' : ''} onClick={setActiveItem}>
      {icon}
      <h3 className='item-title'>{title}</h3>
    </SidebarItem>
  )
}