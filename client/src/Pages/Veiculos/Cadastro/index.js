/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import CloseIcon from '@mui/icons-material/Close'

import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Typography,
  IconButton,
} from '@mui/material'
import FlexBox from 'Components/Flexbox'
import Alert from 'Components/Alerts'
import api from 'Services/api'
import Spacer from 'Components/Spacer'

export default function Cadastro({ open, setOpen }) {
  const navigate = useNavigate()
  const [options, setOptions] = useState([])
  const [marca, setMarca] = useState('')
  const [statusAlert, seStatusAlert] = useState(false)
  const [msg, setMsg] = useState({})

  const validate = Yup.object().shape({
    marca_id: Yup.string().required('Obrigatorio'),
    veiculo: Yup.string().required('Obrigatorio'),
    descricao: Yup.string().required('Obrigatorio'),
    ano: Yup.string().required('Obrigatorio'),
    vendido: Yup.bool().required('Obrigatorio'),
  })

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    api
      .get('/marcas')
      .then((res) => {
        setOptions(res.data.data)
      })
      .catch((err) => {})
  }, [])

  const onSubmit = async (e) => {
    e.marca = marca
    e.updated = ''
    api
      .post('/veiculos', e)
      .then((res) => {
        setMsg({ type: 'success', msg: 'Veículo Cadastrado' })
        seStatusAlert(true)
        let timeout = setTimeout(() => {
          seStatusAlert(false)
          window.location.reload()
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

  return (
    <>
      <Alert open={statusAlert} type={msg.type} msg={msg.msg} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <FlexBox
          sx={(theme) => ({
            justifyContent: 'end',
            pt: '0.2rem',
          })}
        >
          <IconButton
            sx={(theme) => ({
              fontSize: theme.typography.h6.fontSize,
            })}
            onClick={handleClose}
            color="primary"
          >
            <CloseIcon />
          </IconButton>
        </FlexBox>

        <DialogContent>
          <FlexBox
            sx={{
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'stretch',
            }}
          >
            <FlexBox sx={{ justifyContent: 'center' }}>
              <Formik
                initialValues={{
                  marca_id: '',
                  veiculo: '',
                  descricao: '',
                  ano: '',
                  vendido: '',
                  created: new Date(),
                }}
                validationSchema={validate}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Typography
                      sx={(theme) => ({
                        flex: '1 1 auto',
                        textAlign: 'center',
                        fontWeight: theme.typography.fontWeightMedium,
                        fontSize: theme.typography.h4.fontSize,
                      })}
                    >
                      Cadastro Veículo
                    </Typography>

                    <Spacer sx={{ height: '1rem' }} />
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
                    <Field
                      error={errors.marca_id && touched.marca_id}
                      name="marca_id"
                      label="Marca"
                      id="marca"
                      type="text"
                      as={TextField}
                      select
                      fullWidth
                      variant="standard"
                      sx={({ theme }) => ({
                        mb: '0.8rem',
                      })}
                      helperText={
                        errors.marca_id && touched.marca_id ? (
                          <span>{errors.marca_id}</span>
                        ) : null
                      }
                    >
                      {options.map((val) => {
                        return (
                          <MenuItem
                            key={val.id}
                            value={val.id}
                            onClick={() => {
                              setMarca(val.description)
                            }}
                          >
                            {val.description}
                          </MenuItem>
                        )
                      })}
                    </Field>
                    <Field
                      sx={({ theme }) => ({
                        mb: '0.8rem',
                      })}
                      error={errors.veiculo && touched.veiculo}
                      name="veiculo"
                      label="Veiculo"
                      id="veiculo"
                      type="text"
                      as={TextField}
                      helperText={
                        errors.veiculo && touched.veiculo ? (
                          <span>{errors.veiculo}</span>
                        ) : null
                      }
                      fullWidth
                      variant="standard"
                    />
                    <Field
                      sx={({ theme }) => ({
                        mb: '1.5rem',
                      })}
                      error={errors.ano && touched.ano}
                      name="ano"
                      label="Ano"
                      id="ano"
                      type="text"
                      as={TextField}
                      helperText={
                        errors.ano && touched.ano ? (
                          <span>{errors.ano}</span>
                        ) : null
                      }
                      fullWidth
                      variant="standard"
                    />
                    <Field
                      sx={({ theme }) => ({
                        mb: '0.8rem',
                      })}
                      error={errors.descricao && touched.descricao}
                      name="descricao"
                      label="Descrição"
                      id="descricao"
                      type="text"
                      as={TextField}
                      helperText={
                        errors.descricao && touched.descricao ? (
                          <span>{errors.descricao}</span>
                        ) : null
                      }
                      multiline
                      rows={4}
                      fullWidth
                    />
                    <FlexBox
                      sx={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                      }}
                    >
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
                    </FlexBox>
                  </Form>
                )}
              </Formik>
            </FlexBox>
          </FlexBox>
        </DialogContent>
      </Dialog>
    </>
  )
}
