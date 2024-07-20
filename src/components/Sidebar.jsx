import { CalendarIcon, ChevronDownIcon, ClockIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/16/solid'
import React from 'react'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow Icon={UsersIcon} title='Friends'/>
      <SidebarRow Icon={UserGroupIcon} title='Group'/>
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace'/>
      <SidebarRow Icon={ComputerDesktopIcon} title='Watch'/>
      <SidebarRow Icon={CalendarIcon} title='Events'/>
      <SidebarRow Icon={ClockIcon} title='Memories'/>
      <SidebarRow Icon={ChevronDownIcon} title='See more'/>
    </div>
  )
}

export default Sidebar