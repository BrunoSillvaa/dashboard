import { SidebarItem } from './styles';
import { ReactNode } from 'react'

interface SidebarItemProps {
  title: string,
  icon: ReactNode,
  active: boolean,
  setCurrentPage: (page: string) => void
}

export function Item({title, icon, active, setCurrentPage}: SidebarItemProps) {
  return (
    <SidebarItem className={active ? 'active' : ''} onClick={() => setCurrentPage(title)}>
      {icon}
      <h3 className='item-title'>{title}</h3>
    </SidebarItem>
  )
}