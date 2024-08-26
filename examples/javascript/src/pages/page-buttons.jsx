import React, { useState } from 'react'

import {
  Page,
  Tab,
  usePage,
  useTabs,
} from 'alya-ui'

import TabPrimaryButtons from '@/components/tab-primary-buttons'

export default function Page1(props) {
  const page = usePage({
    title: 'Buttons',
  })

  const [pageTabs] = useState([
    { name: 'Primary', component: TabPrimaryButtons },
    { name: 'Secondary', component: TabPrimaryButtons },
    { name: 'Tertiary', component: TabPrimaryButtons },
  ])

  const tabs = useTabs(pageTabs)

  return (
    <Page>
      <Page.Header showBackButton={true} small={true}/>
      <Page.Content>
        <Tab {...tabs}/>
      </Page.Content>
    </Page>
  )
}
