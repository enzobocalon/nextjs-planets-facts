import { ActionContext } from '@/context/ActionContext';
import { useContext } from 'react';
import Box from '../Box';
import * as S from './styles';

export default function PlanetActions() {
	const {isActive, setIsActive} = useContext(ActionContext);
	const handleClick = (active: number) => {
		setIsActive(active);
	};

	return (
		<S.Container>
			<Box shouldRenderAsColumns={false} active={isActive === 1 ? true : false} isClickable={true} onClick={() => handleClick(1)}>
				<S.ActionNumber>01</S.ActionNumber>
				<S.ActionTitle>OVERVIEW</S.ActionTitle>
			</Box>
			<Box shouldRenderAsColumns={false} active={isActive === 2 ? true : false} isClickable={true} onClick={() => handleClick(2)}>
				<S.ActionNumber>02</S.ActionNumber>
				<S.ActionTitle>INTERNAL STRUCTURE</S.ActionTitle>
			</Box>
			<Box shouldRenderAsColumns={false} active={isActive === 3 ? true : false} isClickable={true} onClick={() => handleClick(3)}>
				<S.ActionNumber>03</S.ActionNumber>
				<S.ActionTitle>SURFACE GEOLOGY</S.ActionTitle>
			</Box>
		</S.Container>
	);
}
