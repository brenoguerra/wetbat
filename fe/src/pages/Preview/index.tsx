import { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { 
  FaDollarSign, 
  FaHome, 
  FaListAlt,
  FaTelegramPlane,
  FaFile,
  FaChartBar,
  FaUsers,
  FaCog,
  FaLifeRing
} from 'react-icons/fa';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { Home } from './Home';
import { Quotes } from './Quotes';

import { Content, ContentBox } from './styles';

export interface MenuItemProps {
  [key: string]: {
    name: string;
    label: string;
    icon: React.ComponentType<IconBaseProps>;
    endSection?: boolean;
    page: React.ElementType;
  }
}

export const Preview = () => {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false)
  const [selectedItem, setSelectedItem] = useState('home')

  const items: MenuItemProps = {
    home: {
      name: 'home',
      label: 'Home',
      icon: FaHome,
      page: Home,
    },
    quotes: {
      name: 'quotes',
      label: 'Quotes',
      icon: FaDollarSign,
      page: Quotes,
    },
    leads: {
      name: 'leads',
      label: 'Leads',
      icon: FaListAlt,
      page: Quotes,
    },
    tour: {
      name: 'tour',
      label: 'Tour',
      icon: FaTelegramPlane,
      endSection: true,
      page: Quotes,
    },
    invoices: {
      name: 'invoices',
      label: 'Invoices',
      icon: FaFile,
      page: Quotes,
    },
    analytics: {
      name: 'analytics',
      label: 'Analytics',
      icon: FaChartBar,
      page: Quotes,
    },
    team: {
      name: 'team',
      label: 'Team',
      icon: FaUsers,
      page: Quotes,
    },
    admin: {
      name: 'admin',
      label: 'Admin',
      icon: FaCog,
      page: Quotes,
    },
    support: {
      name: 'support',
      label: 'Support',
      icon: FaLifeRing,
      page: Quotes,
    }
  }

  const { page: Page } = items[selectedItem];

  return (
    <>
      <Header isOpenHamburgerMenu={isOpenHamburgerMenu} setIsOpenHamburgerMenu={setIsOpenHamburgerMenu} />

      <Content>

        <Sidebar 
          isOpenHamburgerMenu={isOpenHamburgerMenu} 
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          menuItems={items}
        />

        <ContentBox>
          <Page />
        </ContentBox>
      </Content>
    </>
  )
};