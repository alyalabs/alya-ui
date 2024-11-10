import React from 'react'

import {
  Page,
  Button,
} from 'alya-ui'

import {
  Box,
  Home,
  CalendarCheck,
} from 'lucide-react'

export default function TabDefaultButtons(props) {
  return (
    <>
      <div className="dev">
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL}>Button</Button>
          <Button size={Button.SIZE_MEDIUM}>Button</Button>
          <Button size={Button.SIZE_LARGE}>Button</Button>
          <Button size={Button.SIZE_EXTRA_LARGE}>Button</Button>
        </div>
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL} uppercase={true}>Button</Button>
          <Button size={Button.SIZE_MEDIUM} uppercase={true}>Button</Button>
          <Button size={Button.SIZE_LARGE} uppercase={true}>Button</Button>
          <Button size={Button.SIZE_EXTRA_LARGE} uppercase={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL} uppercase={true} disabled={true}>Button</Button>
          <Button size={Button.SIZE_MEDIUM} uppercase={true} disabled={true}>Button</Button>
          <Button size={Button.SIZE_LARGE} uppercase={true} disabled={true}>Button</Button>
          <Button size={Button.SIZE_EXTRA_LARGE} uppercase={true} disabled={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL} icon={<CalendarCheck/>}>Button</Button>
          <Button size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>}>Button</Button>
          <Button size={Button.SIZE_LARGE} icon={<CalendarCheck/>}>Button</Button>
          <Button size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>}>Button</Button>
        </div>
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button size={Button.SIZE_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
        </div>
        <div className="dev__row">
          <Button size={Button.SIZE_SMALL} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button size={Button.SIZE_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
        </div>
      </div>
      <div className="dev">
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE} uppercase={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE} uppercase={true} disabled={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_SECONDARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
        </div>
      </div>
      <div className="dev">
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE} uppercase={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE} uppercase={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE} uppercase={true} disabled={true}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE} uppercase={true} disabled={true}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} iconSide={Button.ICON_RIGHT}>Button</Button>
        </div>
        <div className="dev__row">
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_SMALL} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_MEDIUM} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
          <Button variant={Button.VARIANT_TERTIARY} size={Button.SIZE_EXTRA_LARGE} icon={<CalendarCheck/>} onlyIcon={true} />
        </div>
      </div>
    </>
  )
}
