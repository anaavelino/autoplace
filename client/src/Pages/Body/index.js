/* eslint-disable import/no-unresolved */
import { Outlet } from 'react-router-dom'
import FlexBox from 'Components/Flexbox'
import Background from './Styled/Background'
import Navigation from './Components/Navigation'

export default function Header() {
  return (
    <Background>
      <Navigation />

      <FlexBox
        sx={{
          padding: {xs:'1rem',sm:'2rem'},
          flex: '1 1 auto',
          justifyContent: 'start',
          alignItems: 'stretch',
          maxHeight: 'calc ( )',
          oveflow: 'auto',
        }}
      >
        <Outlet />
      </FlexBox>
    </Background>
  )
}
