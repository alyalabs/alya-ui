import React, {forwardRef} from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import fadeVariants from '@/animations/fade-variants'

import PageHeader from '@/components/page-header'
import PageTabbedHeader from '@/components/page-tabbed-header'
import PageTitles from '@/components/page-titles'
import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import PageContent from '@/components/page-content'

type PageProps = React.ComponentProps<typeof motion.div>

const Page = forwardRef<HTMLDivElement, PageProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <motion.div
      {...props}
      className={clsx('alya-page', className)}
      ref={ref}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={fadeVariants}
    >
      {children}
    </motion.div>
  )
})

export default Object.assign(Page, {
  Header: PageHeader,
  TabbedHeader: PageTabbedHeader,
  Titles: PageTitles,
  Title: PageTitle,
  Subtitle: PageSubtitle,
  Content: PageContent,
})