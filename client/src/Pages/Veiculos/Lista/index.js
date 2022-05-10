import React, { useState, useEffect } from 'react'
import api from 'Services/api'
import { useNavigate } from 'react-router-dom'
import FlexBox from 'Components/Flexbox'
import { Button, Stack, TextField, Typography } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import DeleteIcon from '@mui/icons-material/Delete'
import Table from 'Components/Table'
import Loader from 'Components/Loader'
import Alert from 'Components/Alerts'
import SearchIcon from '@mui/icons-material/Search'
import { Field, Form, Formik } from 'formik'
import Spacer from 'Components/Spacer'
import Cadastro from '../Cadastro'

export default function Lista() {
  const navigate = useNavigate()

  const [rows, setRows] = useState([])
  const [loader, setLoader] = useState('LOADING')
  const [statusAlert, seStatusAlert] = useState(false)
  const [msg, setMsg] = useState({})
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({})

  function editar(id) {
    navigate(`/veiculos/editar/${id}`)
  }

  useEffect(() => {
    const arrayRows = []
    api
      .get('/veiculos')
      .then((res) => {
        res.data.data.forEach((val) => {
          arrayRows.push({ ...val })
        })
        setRows(arrayRows)
        setLoader('DONE')
      })
      .catch((err) => {})
  }, [])

  function deleteVeiculo(id) {
    api
      .delete(`/veiculos/${id}`)
      .then((res) => {
        setMsg({ type: 'success', msg: 'Veículo apagado com sucesso, aguarde' })
        seStatusAlert(true)
        setTimeout(() => {
          seStatusAlert(false)
          window.location.reload()
        }, '4000')
      })
      .catch((err) => {
        seStatusAlert(true)
        setMsg({ type: 'error', msg: 'Não foi possível' })
        let timeout = setTimeout(() => {
          seStatusAlert(false)
        }, '4000')
      })
  }

  const onSubmit = async (e) => {
    setForm(e)
  }
  const columns = [
    {
      id: 'id',
      label: '#',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },
    {
      id: 'veiculo',
      label: 'Veículo',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },

    {
      id: 'marca',
      label: 'Marca',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },
    {
      id: 'ano',
      label: 'Ano',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },
    {
      id: 'vendido',
      label: 'Vendido',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },
    {
      id: 'descricao',
      label: 'Descrição',
      minWidth: 100,
      align: 'center',
      format: (value) => value,
    },

    {
      id: 'ferramentas',
      label: 'Ferramentas',
      minWidth: 100,
      // eslint-disable-next-line react/no-unstable-nested-components
      actions: (params) => (
        <>
          <Button onClick={() => editar(params.id)}>
            <ModeIcon />
          </Button>
          <Button onClick={() => deleteVeiculo(params.id)}>
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ]

  return (
    <Loader state={loader}>
      <Alert open={statusAlert} type={msg.type} msg={msg.msg} />
      <FlexBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <FlexBox
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flex: '0 0 0',
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          }}
        >
          <Typography
            sx={(theme) => ({
              flex: '1 1 auto',
              textAlign: 'left',
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: theme.typography.h4.fontSize,
              color: theme.palette.primary.dark,
            })}
          >
            Lista de Veículos
          </Typography>
          <Button
            sx={{ boxShadow: (theme) => theme.shadows[5] }}
            onClick={() => {
              setOpen(true)
            }}
            size="large"
            variant="contained"
            color="secondary"
            rounded
          >
            {' '}
            Novo Veículo
          </Button>
        </FlexBox>

        <Spacer sx={{ height: '0.5rem' }} />

        <Formik
          initialValues={{
            veiculo: '',
            marca: '',
            ano: '',
          }}
          ///validationSchema={validate}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: '20px 0px ',
                }}
                direction="row"
                spacing={4}
              >
                <Field
                  error={errors.veiculo && touched.veiculo}
                  name="veiculo"
                  label="Veículo"
                  id="veiculo"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                />

                <Field
                  error={errors.marca && touched.marca}
                  name="marca"
                  label="Marca"
                  id="marca"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                />

                <Field
                  error={errors.ano && touched.ano}
                  name="ano"
                  label="Ano"
                  id="ano"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                />

                <Button type="submit" variant="contained" size="large">
                  <SearchIcon sx={{ width: '1.5rem' }} />
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>

        <Cadastro open={open} setOpen={setOpen} />
        <Table rows={rows} columns={columns} filterStatement={form} />
      </FlexBox>
    </Loader>
  )
}
