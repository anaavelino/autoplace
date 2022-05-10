import { useEffect, useState } from 'react'
import FlexBox from 'Components/Flexbox'
import { CircularProgress, Typography, Backdrop } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Spacer from 'Components/Spacer'

export default function Loader({ state, children }) {
  const [current, setCurrent] = useState(state)
  useEffect(() => {
    setTimeout(() => {
      setCurrent(state)
    }, 1000)
  }, [state])

  switch (current) {
    case 'LOADING':
      return (
        <FlexBox
          direction="row"
          align="center"
          justify="center"
          flex="1 1 auto"
          sx={{ width: '100%', height: '100%' }}
        >
          <Backdrop
            sx={{
              zIndex: (theme) => theme.zIndex.appBar - 100,
            }}
            open
            onClick={() => {}}
          >
            <FlexBox
              sx={(theme) => ({
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '200px',
                background: theme.palette.background.default,
                boxShadow: theme.shadows[2],
                borderBottom: `5px solid ${theme.palette.primary.main}`,
                flex: '0 0 0',
                padding: '3rem',
              })}
            >
              <FlexBox
                sx={{
                  flexDirection: 'column',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <Typography sx={{ fontSize: '2rem' }}>CARREGANDO</Typography>
                <Typography
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  variant="body1"
                >
                  Seja Paciente
                </Typography>
              </FlexBox>
              <Spacer
                sx={{ width: '2rem', display: { xs: 'none', sm: 'flex' } }}
              />
              <FlexBox>
                <CircularProgress color="secondary" size={100} />
              </FlexBox>
            </FlexBox>
          </Backdrop>
        </FlexBox>
      )
    case 'ERROR':
      return (
        <FlexBox
          direction="row"
          align="center"
          justify="center"
          flex="1 1 auto"
          sx={{ width: '100%', height: '100%' }}
        >
          <Backdrop
            sx={{
              zIndex: (theme) => theme.zIndex.appBar - 100,
            }}
            open
            onClick={() => {}}
          >
            <FlexBox
              sx={(theme) => ({
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                background: theme.palette.background.default,
                boxShadow: theme.shadows[2],
                borderBottom: `5px solid ${theme.palette.error.main}`,
                flex: '0 0 0',
                padding: '3rem',
              })}
            >
              <FlexBox
                sx={{
                  flexDirection: 'column',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <Typography sx={{ fontSize: '2rem' }}>ERRO INTERNO</Typography>
                <Typography
                  sx={{ color: (theme) => theme.palette.error.dark }}
                  variant="body1"
                >
                  Tente Novamente Mais Tarde
                </Typography>
              </FlexBox>
              <Spacer
                sx={{ width: '2rem', display: { xs: 'none', sm: 'flex' } }}
              />
              <FlexBox>
                <ErrorOutlineIcon sx={{ fontSize: '8rem' }} color="error" />
              </FlexBox>
            </FlexBox>
          </Backdrop>
        </FlexBox>
      )
    default:
      return children
  }
}
