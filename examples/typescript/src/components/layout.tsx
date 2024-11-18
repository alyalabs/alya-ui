import React from 'react'

import { PanelLayout } from 'alya-ui'

import Sidebar from '@/components/sidebar'

export default function AppLayout({
  children
}: React.PropsWithChildren) {
  return (
    <PanelLayout>
      <Sidebar/>
      {children}
    </PanelLayout>
  )
}
