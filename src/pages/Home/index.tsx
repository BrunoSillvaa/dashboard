import { Container } from '../../AppStyles'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'

import { SimpleCard } from './Cards/SimpleCard'
import { WelcomeCard } from './Cards/WelcomeCard'
import { LineChartCard } from './Cards/LineChartCard'
import { Content, FirstRow, SecondRow, ThirdRow } from './styles'

import { FaWallet } from 'react-icons/fa'
import { ColumnChartCard } from './Cards/ColumnChartCard'
import { RevenueCard } from './Cards/RevenueCard'

export function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Navbar />

        <FirstRow>
          <SimpleCard
            title={'Saldo'}
            value={3000}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Semana'}
            value={3000}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Mês'}
            value={3000}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Ano'}
            value={3000}
            icon={<FaWallet className='icon' />}
          />
        </FirstRow>
        
        <SecondRow>
          <WelcomeCard name='Bruno' />

          <LineChartCard />
        </SecondRow>

        <ThirdRow>
          <ColumnChartCard />
          <RevenueCard />
        </ThirdRow>
      </Content>
    </Container>
  )
}
