import { Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import Spacer from 'Components/Spacer'
import FlexBox from 'Components/Flexbox'
import Background from './Styled/Background'
import LinkButton from './Styled/LinkButton'

export default function NotFound() {
  return (
    <Background>
      <FlexBox sx={{ justifyContent: 'center' }}>
        <FlexBox
          sx={{
            maxWidth: { xs: '100vw', sm: '70vw', md: '90vw' },
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            flexWrap: 'wrap',
          }}
        >
          <FlexBox
            sx={(theme) => ({
              flex: '1 1 auto',
              padding: ' 0.5rem',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              maxWidth: '300px',
            })}
          >
            <Typography
              sx={(theme) => ({
                textAlign: 'left',
                color: theme.palette.primary.dark,
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: {
                  xs: theme.typography.h4.fontSize,
                  sm: theme.typography.h3.fontSize,
                },
              })}
            >
              Página não Encontrada
            </Typography>
            <Spacer sx={{ height: '1rem' }} />
            <Typography
              sx={(theme) => ({
                textAlign: 'left',
                color: theme.palette.text.secondary,
                fontWeight: theme.typography.fontWeightRegular,
                fontSize: theme.typography.body1.fontSize,
              })}
            >
              O link que você utilizou é inválido ou incompleto, caso tenha
              certeza que esse é o endereço correto entre em contato com os
              admnistradores do sistema
            </Typography>
            <Spacer sx={{ height: '1rem' }} />
            <LinkButton
              to="/"
              size="large"
              color="secondary"
              variant="contained"
            >
              Me tire daqui
            </LinkButton>
          </FlexBox>
          <Spacer
            sx={{
              width: { md: '10vw', lg: '1vw' },
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <FlexBox
            sx={{
              display: { xs: 'none', md: 'flex' },
              padding: '1rem',
              flex: '0 0 0',
              borderRadius: '10px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

              background: (theme) => ` linear-gradient(90deg,
          ${theme.palette.secondary.main} 30%,
          ${theme.palette.secondary.light} 90%)`,
            }}
          >
            <FlexBox
              sx={{
                background: (theme) => theme.palette.background.paper,
                padding: '1rem',
                justifyContent: 'center',
                borderRadius: '10px',
                boxShadow: '0px 5px 5px 0px rgba(50,50,50,0.08)',
              }}
            >
              <LanguageIcon
                sx={(theme) => ({
                  background: `-webkit-linear-gradient(90deg,
                    ${theme.palette.secondary.light} 30%,
                    ${theme.palette.secondary.main} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: {
                    md: '7rem',
                    lg: '11rem',
                  },
                  color: theme.palette.primary.main,
                })}
              />
              <Typography
                sx={(theme) => ({
                  background: `-webkit-linear-gradient(90deg,
                    ${theme.palette.secondary.light} 30%,
                    ${theme.palette.secondary.main} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: theme.typography.fontWeightBold,
                  textAlign: 'center',
                  fontSize: {
                    md: '7rem',
                    lg: '10rem',
                  },
                })}
              >
                {' '}
                404
              </Typography>
            </FlexBox>

            <Spacer sx={{ height: '1.5rem' }} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Background>
  )
}
