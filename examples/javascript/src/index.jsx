import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '@/components/layout'
import Home from '@/pages/home'

import { AlyaUIProvider } from 'alya-ui'
import 'alya-ui/styles'

import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout><Home/></Layout>)
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
