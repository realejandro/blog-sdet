import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage, ContactPage } from '../blog/pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
    </Routes>
  )
}
