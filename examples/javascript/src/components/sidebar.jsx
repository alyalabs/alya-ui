import React from 'react'

import { Sidebar } from 'alya-ui'

import user_placeholder from '@/assets/img/user_placeholder.png'
import carlos from '@/assets/img/carlos.png'

export default function AppSidebar(props) {
  return (
    <Sidebar>
      <Sidebar.Top>
          <Sidebar.Header>
            <Sidebar.Title>Example Application</Sidebar.Title>
          </Sidebar.Header>

          <Sidebar.Menu>
            <Sidebar.MenuItem href="/">
              Home
            </Sidebar.MenuItem>
            <Sidebar.MenuItem href="/pagina-1">
              Página 1
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Top>

        <Sidebar.Bottom>
          <Sidebar.Footer>
            <Sidebar.User user={{
              name: 'Carlos Eduardo',
              username: 'carlosedba',
              picture: carlos
            }}/>
          </Sidebar.Footer>
        </Sidebar.Bottom>
    </Sidebar>
  )
}
