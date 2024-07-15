import React, {forwardRef} from 'react'
import clsx from 'clsx'

const Tab = forwardRef(function ({
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
