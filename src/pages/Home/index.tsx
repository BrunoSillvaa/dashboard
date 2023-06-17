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

import { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'

export function Home() {
  const {sidebar} = useContext(GeneralContext)

  return (
    <Container>
      <Sidebar />
      <Content sidebar={sidebar}>
        <Navbar />

        <FirstRow>
          <SimpleCard
            title={'Saldo'}
            value={7250}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Semana'}
            value={2120}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Mês'}
            value={6300}
            icon={<FaWallet className='icon' />}
          />

          <SimpleCard
            title={'Ano'}
            value={42710}
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
