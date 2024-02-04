import React from 'react'
import { HeaderBar } from '../components/HeaderBar'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  )
}
