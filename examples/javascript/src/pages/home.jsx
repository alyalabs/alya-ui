import React from 'react'

import {
  Page,
  usePage
} from 'alya-ui'

export default function Home(props) {
  const page = usePage({
    title: 'Home',
    description: 'Lorem ipsum dolor sit amet consectetur',
  })

  return (
    <Page>
      <Page.Header/>
      <Page.Content></Page.Content>
    </Page>
  )
}
