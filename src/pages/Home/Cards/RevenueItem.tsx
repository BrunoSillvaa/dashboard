import {FaEdit, FaTrash} from 'react-icons/fa'

export interface RevenueItem {
  item: {
    id: number
    name: string
    type: string
    date: string
    value: number
  }
}

export function RevenueItem({item}: RevenueItem){
  function renameType(type: string) {
    if (type === 'expense') return 'Gasto'
    else if (type === 'profit') return 'Lucro'
  }

  function remadeDate(date: string) {
    const [year, month, day] = date.split('/')
    const newDate = new Date(+year, +month, +day)
    return newDate.toLocaleDateString()
  }

  return (
    <tr className='item'>
      <td>{item.name}</td>
      <td>{renameType(item.type)}</td>
      <td>{remadeDate(item.date)}</td>
      <td>R$ {item.value}</td>
      <td><FaEdit className='edit-icon'/></td>
      <td><FaTrash className='trash-icon'/></td>
    </tr>
  )
}