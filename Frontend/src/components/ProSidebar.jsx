import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {SubMenu, useProSidebar } from "react-pro-sidebar";


import React from 'react'

const ProSidebar = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar className="bg-violet-950 !border-0">
        <Menu className="bg-gradient-to-b from-violet-200 to-violet-800 h-full border-0">
          <MenuItem className="hover:text-neutral-900 text-neutral-900 font-bold" icon={<MenuRoundedIcon 
           onClick={() => {
            collapseSidebar();
          }}
          />}>
            <h2>Amultet</h2>
          </MenuItem>
          <MenuItem className=" text-neutral-900 font-bold hover:text-neutral-800 hover:font-semibold transition duration-300"> Dashboard </MenuItem>
          <MenuItem 
          className="text-neutral-900 font-bold hover:text-neutral-800 hover:font-semibold transition duration-300"> Settings </MenuItem>
          <MenuItem 
          className="text-neutral-900 font-bold hover:text-neutral-800 hover:font-semibold transition duration-300"
          > Logout </MenuItem>
        </Menu>
      </Sidebar>
  )
}

export default ProSidebar