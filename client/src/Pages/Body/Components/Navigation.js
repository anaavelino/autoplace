/* eslint-disable import/no-unresolved */
import { useRef, useState } from 'react'
import { Typography, Button, IconButton, Stack, Divider } from '@mui/material'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import { Menu } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import pages from 'Routes/pages'
import FlexBox from 'Components/Flexbox'
import Spacer from 'Components/Spacer'
import useOnClickOutside from 'Functions/useOnClickOutside'
import GrainIcon from '@mui/icons-material/Grain'
import Sidebar from '../Styled/SideBar'
import AppBar from '../Styled/AppBar'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const ignore = useRef()
  useOnClickOutside(
    ref,
    () => {
      setOpen(false)
    },
    ignore
  )
  return (
    <>
      <AppBar>
        <FlexBox sx={{ flex: '1 1 auto', padding: '5px 10px' }}>
          <IconButton
            onClick={() => {
              setOpen(!open)
            }}
            ref={ignore}
          >
            <Menu />
          </IconButton>
          <Spacer sx={{ width: '1rem' }} />
          <FlexBox>
            <Typography
              sx={(theme) => ({
                color: theme.palette.primary.contrastText,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.h5.fontSize,
              })}
            >
              AUTO
            </Typography>
            <Typography
              sx={(theme) => ({
                color: theme.palette.secondary.light,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.h5.fontSize,
              })}
            >
              PLACE
            </Typography>
            <Spacer sx={{ width: '0.5rem' }} />
            <DriveEtaIcon
              sx={(theme) => ({
                color: theme.palette.text.icon,
                fontSize: theme.typography.h4.fontSize,
              })}
            />
          </FlexBox>
        </FlexBox>
        <FlexBox
          sx={{
            flex: '1 1 auto',
            height: '4px',
            background: (theme) => ` linear-gradient(90deg,
        ${theme.palette.secondary.main} 0%,
        ${theme.palette.secondary.light} 50%,
        ${theme.palette.secondary.main} 100%)`,
          }}
        />
      </AppBar>

      <Sidebar ref={ref} show={open}>
        <FlexBox
          sx={{
            padding: '5px 20px',
            flex: '0 0 0',
            display: { xs: 'flex', sm: 'none' },
            background: (theme) => theme.palette.primary.contrastText,
            boxShadow: '0px 5px 20px 0px rgba(50,50,50,0.05)',
          }}
        >
          <FlexBox
            sx={{
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={(theme) => ({
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.h5.fontSize,
              })}
            >
              AUTO
            </Typography>
            <Typography
              sx={(theme) => ({
                color: theme.palette.secondary.light,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.h5.fontSize,
              })}
            >
              PLACE
            </Typography>
          </FlexBox>

          <IconButton
            onClick={() => {
              setOpen(!open)
            }}
          >
            {' '}
            <Menu />
          </IconButton>
        </FlexBox>
        <Spacer sx={{ height: { xs: '1rem', sm: '0rem' } }} />
        <Stack
          sx={{ px: '5px' }}
          spacing={1}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          {pages.map((item) => (
            <NavLink
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
              }}
              to={item.path}
              onClick={() => {
                setOpen(false)
              }}
            >
              {({ isActive }) => (
                <Button
                  variant="text"
                  color="primary"
                  sx={(theme) => ({
                    padding: '10px 15px',
                    transitionDuration: '300ms',
                    backgroundColor: isActive
                      ? theme.palette.background.default
                      : theme.palette.background.paper,
                    borderRadius: '5px',
                    flex: '1 1 auto',
                  })}
                >
                  <GrainIcon
                    sx={{
                      color: (theme) =>
                        isActive
                          ? theme.palette.secondary.main
                          : theme.palette.primary.main,
                      display: { xs: 'none', sm: 'flex' },
                    }}
                  />
                  <Typography
                    sx={(theme) => ({
                      fontSize: theme.typography.body1.fontSize,
                      px: '5px',
                      fontWeight: theme.typography.fontWeightMedium,
                      flex: '1 1 auto',
                    })}
                  >
                    {item.label}
                  </Typography>
                </Button>
              )}
            </NavLink>
          ))}
        </Stack>
      </Sidebar>
    </>
  )
}
