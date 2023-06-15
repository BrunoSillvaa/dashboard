export interface RevenueItem {
  id: number
  name: string
  type: string
  date: string
  value: number
}

export const RevenueItems: RevenueItem[] = [
  {
    id: 1,
    name: 'Mercado',
    type: 'expense',
    date: '2023/12/05',
    value: 500
  },
  {
    id: 2,
    name: 'Salário',
    type: 'profit',
    date: '2023/05/05',
    value: 3675
  },
  {
    id: 3,
    name: 'Cartão de Credito',
    type: 'expense',
    date: '2023/10/05',
    value: 1000
  },
  {
    id: 4,
    name: 'Shopping',
    type: 'expense',
    date: '2023/17/05',
    value: 320
  },
  {
    id: 5,
    name: 'Serviço Extra',
    type: 'profit',
    date: '2023/21/05',
    value: 1200
  },
  {
    id: 6,
    name: 'Conta de Luz',
    type: 'expense',
    date: '2023/16/05',
    value: 120
  },
  {
    id: 7,
    name: 'Feira',
    type: 'expense',
    date: '2023/28/05',
    value: 80
  },
  {
    id: 8,
    name: 'Conta de Água',
    type: 'expense',
    date: '2023/11/05',
    value: 80
  },
  {
    id: 9,
    name: 'Jogo do Tigrinho',
    type: 'profit',
    date: '2023/29/05',
    value: 325
  }
]