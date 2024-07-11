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
      <Page.Titles>
        <Page.Title>Alunos</Page.Title>
        <Page.Subtitle>Procure e cadastre novos alunos</Page.Subtitle>
      </Page.Titles>

      <Page.Header></Page.Header>
    </Page>
  )
}
