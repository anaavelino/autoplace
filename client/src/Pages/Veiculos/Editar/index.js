/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  RadioGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  Radio,
  Stack,
} from '@mui/material'
import FlexBox from 'Components/Flexbox'
import Alert from 'Components/Alerts'
import Loader from 'Components/Loader'
import api from 'Services/api'

export default function Editar() {
  const id = useParams()
  const navigate = useNavigate()
  const [options, setOptions] = useState([])
  const [data, setData] = useState('')
  const [loader, setLoader] = useState('LOADING')
  const [statusAlert, seStatusAlert] = useState(false)
  const [msg, setMsg] = useState({})

  useEffect(() => {
    let getVeiculo = new Promise((resolve, reject) => {
      api
        .get(`/veiculos/${id.id}`)
        .then((res) => {
          setData(res.data.data)
          resolve()
        })
        .catch((err) => {
          reject()
        })
    })
    let getOptions = new Promise((resolve, reject) => {
      api
        .get('/marcas')
        .then((res) => {
          setOptions(res.data.data)
          resolve()
        })
        .catch((err) => {
          reject()
        })
    })

    Promise.all([getVeiculo, getOptions])
      .then((res) => {
        setLoader('DONE')
      })
      .catch((err) => {
        setLoader('ERROR')
      })
  }, [])

  const onSubmit = async (e) => {
    let temp = { ...e }
    temp.created = data.created
    temp.updated = new Date()
    // eslint-disable-next-line prefer-destructuring

    temp.marca = options.filter(
      (a) => parseInt(a.id, 10) === parseInt(e.marca_id, 10)
    )[0].description
    api
      .put(`/veiculos/${id.id}`, temp)
      .then((res) => {
        setMsg({ type: 'success', msg: 'Veículo Editado' })
        seStatusAlert(true)
        let timeout = setTimeout(() => {
          seStatusAlert(false)
          navigate('/veiculos/listar', { replace: true })
        }, '4000')
      })
      .catch((err) => {
        seStatusAlert(true)
        setMsg({ type: 'error', msg: 'Não foi possível editar' })
        let timeout = setTimeout(() => {
          seStatusAlert(false)
        }, '4000')
      })
  }

  const valoresIniciais = {
    marca_id: data.marca_id,
    veiculo: data.veiculo,
    descricao: data.descricao,
    ano: data.ano,
    vendido: data.vendido,
  }

  const validate = Yup.object().shape({
    marca_id: Yup.string().required('Obrigatorio'),
    veiculo: Yup.string().required('Obrigatorio'),
    descricao: Yup.string().required('Obrigatorio'),
    ano: Yup.string().required('Obrigatorio'),
    vendido: Yup.bool().required('Obrigatorio'),
  })
  return (
    <Loader state={loader}>
      <Alert open={statusAlert} type={msg.type} msg={msg.msg} />
      <FlexBox
        sx={{
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'stretch',
        }}
      >
        <FlexBox sx={{ justifyContent: 'center' }}>
          <Formik
            initialValues={valoresIniciais}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <FlexBox
                sx={{
                  background: (theme) => theme.palette.background.paper,
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  padding: '2rem',
                  maxWidth: '600px',
                  borderRadius: '10px',
                  flex: '1 1 1',
                }}
              >
                <Form>
                  <Stack
                    spacing={2}
                    sx={{
                      alignContent: 'center',
                      padding: '2rem  2rem 1rem 1rem',
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        flex: '1 1 auto',
                        textAlign: 'center',
                        fontWeight: theme.typography.fontWeightMedium,
                        fontSize: theme.typography.h4.fontSize,
                      })}
                    >
                      Editar Veículo
                    </Typography>
                    <Field name="vendido" id="vendido" type="text">
                      {({ field, meta }) => (
                        <FormControl error={meta.error && meta.touched}>
                          <FormLabel>Vendido ?</FormLabel>
                          <RadioGroup
                            sx={{ justifyContent: 'center' }}
                            row
                            {...field}
                          >
                            <FormControlLabel
                              value
                              control={<Radio />}
                              label="Sim"
                            />
                            <FormControlLabel
                              value={false}
                              control={<Radio />}
                              label="Não"
                            />
                          </RadioGroup>
                          <FormHelperText>
                            {meta.error && meta.touched ? meta.error : null}
                          </FormHelperText>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="veiculo" id="veiculo">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Veículo"
                          variant="standard"
                          fullWidth
                          helperText={
                            meta.error && meta.touched ? meta.error : null
                          }
                          error={meta.error && meta.touched}
                        />
                      )}
                    </Field>

                    <Field name="marca_id" id="marca_id">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Marca"
                          select
                          variant="standard"
                          fullWidth
                          error={meta.error && meta.touched}
                          helperText={
                            meta.error && meta.touched ? meta.error : null
                          }
                        >
                          {options.map((item) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.description}
                              </MenuItem>
                            )
                          })}
                        </TextField>
                      )}
                    </Field>

                    <Field name="ano" id="ano">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Ano do Veículo"
                          variant="standard"
                          fullWidth
                          helperText={
                            meta.error && meta.touched ? meta.error : null
                          }
                          error={meta.error && meta.touched}
                        />
                      )}
                    </Field>

                    <Field name="descricao" id="descricao">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Descricao"
                          variant="standard"
                          multiline
                          rows={4}
                          fullWidth
                          helperText={
                            meta.error && meta.touched ? meta.error : null
                          }
                          error={meta.error && meta.touched}
                        />
                      )}
                    </Field>

                    <FlexBox
                      sx={{
                        justifyContent: 'end',
                      }}
                    >
                      <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Salvar
                      </Button>
                    </FlexBox>
                  </Stack>
                </Form>
              </FlexBox>
            )}
          </Formik>
        </FlexBox>
      </FlexBox>
    </Loader>
  )
}
