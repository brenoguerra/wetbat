import { 
  FaBars, 
  FaBell, 
  FaCommentAlt, 
  FaCog, 
  FaSearch, 
  FaTimes 
} from 'react-icons/fa'

import { 
  Container, 
  LeftSection, 
  RightSection, 
  SearchableBar, 
  SearchInput,
  Image
} from "./styles";

interface HeaderProps {
  setIsOpenHamburgerMenu: (value: boolean) => void;
  isOpenHamburgerMenu: boolean;
}

export const Header = ({ setIsOpenHamburgerMenu, isOpenHamburgerMenu }: HeaderProps) => {
  return (
    <Container>
      <LeftSection onClick={() => setIsOpenHamburgerMenu(!isOpenHamburgerMenu)}>
        {!isOpenHamburgerMenu && <FaBars size={'24px'} />}
        {isOpenHamburgerMenu && <FaTimes size={'24px'} />}
        <p>Wet Bat</p>
      </LeftSection>

      <RightSection>
        <SearchableBar>
          <FaSearch />
          <SearchInput />
        </SearchableBar>
        <FaBell />
        <FaCommentAlt />
        <FaCog />
        <Image src='https://www.presetspremium.com/img/free-lightroom-preset-garden.jpg' />
      </RightSection>
    </Container>
  )
}