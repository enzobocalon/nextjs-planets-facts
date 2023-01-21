import styled from 'styled-components';
import * as Theme from '@/styles/themes';
import { Planets } from '@/types/Planet';

interface Props {
  isMobile?: boolean
  planet?: string
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 1.25rem 2rem;
  background-color: ${({theme}) => theme.backgroundColor};
  border-bottom: 1px solid ${({theme}) => theme.borderColor};

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  font-family: ${({theme}) => theme.titleFont};
  width: 40%;

  img {
      display: none;
  }

  h2 {
    font-size: 1.75rem;
  }

  @media (max-width: 1024px) {
    width: fit-content;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: block;
    }
  }
`;

export const MenuContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  max-width: 800px;

  h1 {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding-block: 1rem .5rem;
    padding-inline: 1rem;
  }

  @media (max-width: 768px) {
    z-index: 100;
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    background-color: ${({theme}) => theme.backgroundColor};;
    max-width: 320px;
    height: 100%;
    opacity: ${({isMobile}) => isMobile ? 1 : 0};
    transform: ${({isMobile}) => isMobile ? 'translateX(0)' : 'translateX(200%)'};
    transition: all .3s ease;
    pointer-events: ${({isMobile}) => isMobile ? 'all' : 'none'};
    box-shadow: ${({theme}) => theme.activeColor} 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    h1 {
      display: block;
      margin-top: .5rem;
    }

    > div {
      width: 100%;
      border-bottom: 4px solid ${({theme}) => theme.borderColor};
      padding-bottom: 1rem;

      ::after {
        content: none;
      }
    }
  }
`;

export const Item = styled.div<Props>`
  font-family: ${({theme}) => theme.titleFont};
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -1.8rem;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({planet, theme}) => planet ? Theme[planet as Planets].activeColor : theme.activeColor};
    transform: scale(0);
    transition: all .2s ease;
    transform-origin: center;
  }

  :hover::after {
    transform: scale(1);
    transition: all .2s ease;
  }
`;

export const MobileMenuActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 1.75rem 2rem;
  border-bottom: 1px solid ${({theme}) => theme.borderColor};

  @media (min-width: 768px) {
    display: none;
  }
`;
