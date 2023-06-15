import { ReactNode } from 'react'
import { SimpleCardContainer } from '../styles'

interface SimpleCardProps {
  title: string,
  value: number,
  icon: ReactNode
}

export function SimpleCard({title, value, icon}: SimpleCardProps) {
  return (
    <SimpleCardContainer>
      <h3 className='title'>{title}</h3>
      <strong className='value'>R${value}</strong>
      {icon}
    </SimpleCardContainer>
  )
}