import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/wine.svg';
import accLogo from '../../../public/accLogo.png';
import cartLogo from '../../../public/cartLogo.png';
import haburgerButton from '../../../public/hamburgerButton.png';
import ImageLink from '../links/ImageLink';
import SearchButton from '../buttons/SearchButton';
import { useAppContext } from '../../context/context';

import {
  HeaderStyle,
  HeaderMainSection,
  HeaderLinksSection,
  LogoWrapper,
  HamburguerButtonWrapper,
  HeaderLink,
  CartCount,
} from './style';

function Header() {
  const { searchStatus, setSearchStatus } = useAppContext();

  return (
    <HeaderStyle>
      <HeaderMainSection>
        <HamburguerButtonWrapper>
          <Image src={haburgerButton} alt="Wine logo" width={45} height={45}/>
        </HamburguerButtonWrapper>

        <Link href="/" passHref>
          <LogoWrapper><Image src={logo} alt="Wine logo"/></LogoWrapper>
        </Link>

        <HeaderLinksSection>
          <Link href="/" passHref><HeaderLink>Clube</HeaderLink></Link>
          <Link href="/" passHref><HeaderLink>Loja</HeaderLink></Link>
          <Link href="/" passHref><HeaderLink>Produtores</HeaderLink></Link>
          <Link href="/" passHref><HeaderLink>Ofertas</HeaderLink></Link>
          <Link href="/" passHref><HeaderLink>Eventos</HeaderLink></Link>
        </HeaderLinksSection>
      </HeaderMainSection>

      <HeaderMainSection>
        <SearchButton handleClick={() => setSearchStatus(!searchStatus)} />

        <ImageLink alt="My account button" width={56} height={56} image={accLogo} path="/" />
        <ImageLink alt="Cart button" width={56} height={56} image={cartLogo} path="/" />
        <CartCount>0</CartCount>
      </HeaderMainSection>
    </HeaderStyle>
  );
}

export default Header;
