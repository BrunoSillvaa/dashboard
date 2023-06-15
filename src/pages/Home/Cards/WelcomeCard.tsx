import { WelcomeCardContainer } from '../styles'

interface WelcomeCardProps {
  name: string
}

export function WelcomeCard({name}: WelcomeCardProps) {
  return (
    <WelcomeCardContainer>
      <h3 className='title'>Welcome back, <br/> <strong className='name'>{name}</strong></h3>
      <p>Grad to see you again! <br/> Ask me anything.</p>
      <button>Tab to record →</button>
    </WelcomeCardContainer>
  )
}