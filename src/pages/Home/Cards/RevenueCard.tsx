import { RevenueItems } from '../../../data/revenueItems';
import { RevenueCardContainer } from '../styles';
import { RevenueItem } from './RevenueItem';

export function RevenueCard() {
  return (
    <RevenueCardContainer>
      <h3 className='title'>Últimas movimentações</h3>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr className='header'>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody className='content'>
            {RevenueItems.map(item => (
              <RevenueItem item={item}/>
            ))}
          </tbody>
        </table>
      </div>
    </RevenueCardContainer>
  )
}
