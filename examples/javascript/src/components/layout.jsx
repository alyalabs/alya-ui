import React from 'react'

import { PanelLayout } from 'alya-ui'

import Sidebar from '@/components/sidebar'

export default function AppLayout({
  children
}) {
  return (
    <PanelLayout>
      <Sidebar/>
      {children}
    </PanelLayout>
  )
}
