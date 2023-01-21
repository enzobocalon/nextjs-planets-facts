import * as S from './styles';
import { useContext } from 'react';
import { ActionContext } from '@/context/ActionContext';
import { PlanetData } from '@/types/PlanetData';
import {AnimatePresence, motion} from 'framer-motion';

interface Props {
  planet: PlanetData
}

export default function PlanetPicture({planet}: Props) {
	const {isActive} = useContext(ActionContext);

	return (
		<AnimatePresence mode='wait'>
			<S.Container
				initial={{scale: 2, translateX: -1000}}
				animate={{scale: 1, translateX: 0}}
				exit={{scale: 2, translateX: -1000}}
				key={planet.id}
				transition={{ease: 'easeInOut', duration: .3}}>

				<motion.img
					src={isActive === 1 || isActive === 3 ? planet.images.planet : planet.images.internal}
					initial={{scale: 0}}
					animate={{scale: 1}}
					transition={{ type: 'spring', stiffness: 100 }}
					exit={{scale: 0}}
					key={(Math.random() * 60) + 1.1}/>

				{
					isActive === 3 && (
						<S.Geology>
							<motion.img
								src={planet.images.geology}
								initial={{scale: 0}}
								animate={{scale: 1}}
								exit={{scale: 0}}
								transition={{ type: 'spring', stiffness: 60 }}
								key={Math.random()}/>
						</S.Geology>
					)
				}
			</S.Container>
		</AnimatePresence>
	);
}
