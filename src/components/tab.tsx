import React, {forwardRef} from 'react'
import clsx from 'clsx'

type TabProps = React.ComponentPropsWithoutRef<'div'> & {
  tabs: {
    name: string
    component: React.ComponentType
    props?: any
  }[]
  currentTab: number
  changeTab: (tab: number) => void
  updateTab: (tab: number) => void
}

const Tab = forwardRef<HTMLDivElement, TabProps>(function ({
  tabs,
  currentTab,
  changeTab,
  updateTab,
  className,
  children,
  ...props
}, ref) {
  if (tabs[currentTab] && tabs[currentTab].component instanceof Function) {
    const TabComponent = tabs[currentTab].component
    const tabProps = tabs[currentTab].props || {}
  
    return (
      <div {...props} className={clsx('alya-tab', className)} ref={ref}>
        <TabComponent {...tabProps}/>
      </div>
    )
  }
})

export default Tab
