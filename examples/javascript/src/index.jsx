import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '@/components/layout'
import Home from '@/pages/home'
import Page1 from '@/pages/page-1'
import PageButtons from '@/pages/page-buttons'

import { AlyaUIProvider } from 'alya-ui'
import 'alya-ui/styles'

import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout><Home/></Layout>)
  },
  {
    path: '/page-1',
    element: (<Layout><Page1/></Layout>)
  },
  {
    path: '/buttons',
    element: (<Layout><PageButtons/></Layout>)
  }
])

function main() {
  const container = document.getElementById('root')
  
  if (container) {
    const root = createRoot(container)

    return root.render(
      <AlyaUIProvider>
        <RouterProvider router={router}/>
      </AlyaUIProvider>
    )
  }
}

main()
