import React from 'react';
import { SidebarItem } from './SidebarItem/index';
import { MenuItemProps } from '../../pages/Preview';

import { Container, HamburguerMenu } from './styles'

interface SidebarProps {
  isOpenHamburgerMenu?: boolean;
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  menuItems: MenuItemProps
}

export const Sidebar = ({ 
  isOpenHamburgerMenu = false, 
  selectedItem, 
  setSelectedItem, 
  menuItems,
}: SidebarProps) => {
  return (
    <>
      {
        isOpenHamburgerMenu && (
          <HamburguerMenu>
            {
              Object.keys(menuItems).map(item => (
                <SidebarItem key={menuItems[item].name} {...menuItems[item]} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
              ))
            }
          </HamburguerMenu>
        )
      }

      <Container>
        {
          Object.keys(menuItems).map(item => (
            <SidebarItem key={menuItems[item].name} {...menuItems[item]} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          ))
        }
      </Container>
    </>
  )
}