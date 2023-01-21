import * as S from './styles';
import data from '../../data/index.json';

import mobileMenu from '../../assets/icon-hamburger.svg';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Planets } from '@/types/Planet';
import { ActionContext } from '@/context/ActionContext';
import { AnimatePresence } from 'framer-motion';

interface Props {
  planet: Planets
  setPlanet: Dispatch<SetStateAction<Planets>>
}

export default function Header({ setPlanet }: Props) {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const { setIsActive } = useContext(ActionContext);

	const handleMobile = (planet: Planets) => {
		setPlanet(planet);
		setOpenMobileMenu(false);
	};

	return (
		<AnimatePresence mode='wait'>
			<S.Container>
				<S.Logo>
					<h2>THE PLANETS</h2>
					{
						!openMobileMenu && (
							<img src={mobileMenu.src} onClick={() => setOpenMobileMenu(prev => !prev)}/>
						)
					}
				</S.Logo>

				<S.MenuContainer
					isMobile={openMobileMenu}>
					<h1 onClick={() => setOpenMobileMenu(false)}>X</h1>
					{
						data.map(item => (
							<S.Item key={item.id} onClick={() => handleMobile(item.name as Planets)} planet={item.name}>
								{item.name}
							</S.Item>
						))
					}
				</S.MenuContainer>
			</S.Container>
			<S.MobileMenuActionsContainer>
				<S.Item onClick={() => setIsActive(1)}>
          Overview
				</S.Item>
				<S.Item onClick={() => setIsActive(2)}>
          Structure
				</S.Item>
				<S.Item onClick={() => setIsActive(3)}>
          Surface
				</S.Item>
			</S.MobileMenuActionsContainer>
		</AnimatePresence>
	);
}
