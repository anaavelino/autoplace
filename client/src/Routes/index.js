/* eslint-disable import/no-unresolved */
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Pages from 'Pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Header />}>
          <Route index element={<Pages.Dashboard />} />
          <Route path="/veiculos" element={<Outlet />}>
            <Route path="/veiculos/listar" element={<Pages.Veiculos.Listar />} />
            <Route
              path="/veiculos/editar/:id"
              element={<Pages.Veiculos.Editar />}
            />
          </Route>
        </Route>

        <Route path="/*" element={<Pages.NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
