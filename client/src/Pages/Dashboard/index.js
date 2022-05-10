import { useState, useEffect } from 'react'

import { Typography, Grid, Divider,  } from '@mui/material'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import SellIcon from '@mui/icons-material/Sell'
import CakeIcon from '@mui/icons-material/Cake'
import FlexBox from 'Components/Flexbox'
import Spacer from 'Components/Spacer'
import api from 'Services/api'
import Loader from 'Components/Loader'
import Components from './Components'

export default function Dashboard() {
  const [loader, setLoader] = useState('LOADING')
  const [novos, setNovos] = useState([])
  const [idades, setIdades] = useState([])
  const [vendidos, setVendidos] = useState([])

  useEffect(() => {
    let getNovos = new Promise((resolve, reject) => {
      api
        .get(`/relatorios/novos`)
        .then((res) => {
          setNovos(res.data.data)
          resolve()
        })
        .catch((err) => {
          reject()
        })
    })

    let getIdades = new Promise((resolve, reject) => {
      api
        .get(`/relatorios/idade`)
        .then((res) => {
          setIdades(res.data.data)
          resolve()
        })
        .catch((err) => {
          reject()
        })
    })

    let getVendidos = new Promise((resolve, reject) => {
      api
        .get(`/relatorios/vendidos`)
        .then((res) => {
          setVendidos(res.data.data)
          resolve()
        })
        .catch((err) => {
          reject()
        })
    })

    Promise.all([getNovos, getIdades, getVendidos])
      .then((res) => {
        setLoader('DONE')
      })
      .catch((err) => {
        setLoader('ERROR')
      })
  }, [])

  return (
    <Loader state={loader}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <FlexBox
            sx={(theme) => ({
              background: theme.palette.background.paper,
              padding: '1rem',
              flexDirection: 'column',
              alignItems: 'stretch',
              height: { xs: '325px', sm: '325px', xl: '500px' },
              borderRadius: '10px',
            })}
          >
            <FlexBox sx={{ px: '10px', flex: '0 0 0' }}>
              <NewReleasesIcon
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: '2rem',
                }}
              />
              <Spacer sx={{ width: '1rem' }} />
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  fontSize: '1.5rem',
                }}
              >
                Novos Veículos
              </Typography>
            </FlexBox>

            <Spacer sx={{ height: '0.8rem' }} />
            <Divider />
            <Spacer sx={{ height: '0.8rem' }} />
            <Components.Novos data={novos} />
          </FlexBox>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <FlexBox
            sx={(theme) => ({
              background: theme.palette.background.paper,
              padding: '1rem',
              flexDirection: 'column',
              alignItems: 'stretch',
              height: { xs: '325px', sm: '325px', xl: '500px' },
              borderRadius: '10px',
            })}
          >
            <FlexBox sx={{ px: '10px', flex: '0 0 0' }}>
              <SellIcon
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: '2rem',
                }}
              />
              <Spacer sx={{ width: '1rem' }} />
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  fontSize: '1.5rem',
                }}
              >
                Veículos Vendidos
              </Typography>
            </FlexBox>
            <Spacer sx={{ height: '0.8rem' }} />
            <Divider />
            <Spacer sx={{ height: '0.8rem' }} />
            <FlexBox sx={{ flex: '1 1 auto' }}>
              <Components.Vendidos data={vendidos} />
            </FlexBox>
          </FlexBox>
        </Grid>
        <Grid item xs={12} xl={6}>
          <FlexBox
            sx={(theme) => ({
              background: theme.palette.background.paper,
              padding: '1rem',
              flexDirection: 'column',
              alignItems: 'stretch',
              height: { xs: '325px', sm: '325px', xl: '500px' },
              borderRadius: '10px',
            })}
          >
            <FlexBox sx={{ px: '10px', flex: '0 0 0' }}>
              <CakeIcon
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: '2rem',
                }}
              />
              <Spacer sx={{ width: '1rem' }} />
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  fontSize: '1.5rem',
                }}
              >
                Idade dos Veículos
              </Typography>
            </FlexBox>
            <Spacer sx={{ height: '0.8rem' }} />
            <Divider />
            <Spacer sx={{ height: '0.8rem' }} />
            <FlexBox sx={{ flex: '1 1 auto' }}>
              <Components.Idade data={idades} />
            </FlexBox>
          </FlexBox>
        </Grid>
      </Grid>
    </Loader>
  )
}
