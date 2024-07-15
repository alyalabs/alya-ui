import React, { useState } from 'react'

import {
  Page,
  Tab,
  usePage,
  useTabs,
} from 'alya-ui'

import Tab1 from '@/components/tab-1'
import Tab2 from '@/components/tab-2'

export default function Page1(props) {
  const page = usePage({
    title: 'Page 1',
    description: 'Lorem ipsum dolor sit amet consectetur',
  })

  const [pageTabs] = useState([
    { name: 'Tab 1', component: Tab1 },
    { name: 'Tab 2', component: Tab2 }
  ])

  const tabs = useTabs(pageTabs)

  return (
    <Page>
      <Page.TabbedHeader {...tabs}/>
      <Page.Content>
        <Tab {...tabs}/>
      </Page.Content>
    </Page>
  )
}
