import React, { useState } from 'react'

import {
  Page,
  Tab,
  usePage,
  useTabs,
  TextInput
} from 'alya-ui'

import {
  useForm
} from 'alya-forms'

export default function PageInputs() {
  const page = usePage({
    title: 'Inputs',
  })

  const {
    data,
    connect,
    update,
    reset
  } = useForm()

  return (
    <Page>
      <Page.Header showBackButton={true} small={true}/>
      <Page.Content>
        <TextInput {...connect('name')} label="Name"/>
      </Page.Content>
    </Page>
  )
}
