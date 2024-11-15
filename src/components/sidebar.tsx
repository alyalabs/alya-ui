import React, {forwardRef} from 'react'
import clsx from 'clsx'

import SidebarTop from '@/components/sidebar-top'
import SidebarBottom from '@/components/sidebar-bottom'
import SidebarHeader from '@/components/sidebar-header'
import SidebarFooter from '@/components/sidebar-footer'
import SidebarMenu from '@/components/sidebar-menu'
import SidebarMenuItem from '@/components/sidebar-menu-item'
import SidebarUser from '@/components/sidebar-user'
import SidebarTitle from '@/components/sidebar-title'

type SidebarProps = React.ComponentPropsWithoutRef<'nav'>

const Sidebar = forwardRef<HTMLElement, SidebarProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <nav {...props} className={clsx('alya-sidebar', className)} ref={ref}>
      {children}
    </nav>
  )
})

export default Object.assign(Sidebar, {
  Top: SidebarTop,
  Bottom: SidebarBottom,
  Header: SidebarHeader,
  Footer: SidebarFooter,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  User: SidebarUser,
  Title: SidebarTitle,
})
