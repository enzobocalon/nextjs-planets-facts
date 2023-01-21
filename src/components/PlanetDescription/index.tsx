import Link from 'next/link';

import * as S from './styles';
import iconSource from '../../assets/icon-source.svg';
import PlanetActions from '../PlanetActions';
import { PlanetData } from '@/types/PlanetData';
import { useContext } from 'react';
import { ActionContext } from '@/context/ActionContext';

interface Props {
  planet: PlanetData
}

export default function PlanetDescription({planet}: Props) {
	const { isActive } = useContext(ActionContext);

	return (
		<S.Container
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{ease: 'easeInOut', duration: .3}}
			key={planet.name}>

			<S.Wrapper>
				<S.Title
					initial={{scale: 0}}
					animate={{scale: 1}}
					exit={{scale: 0}}
					transition={{ease: 'easeInOut', duration: .3}}
					key={planet.name}>
					{planet.name}
				</S.Title>
				<S.Description>
					{isActive === 1 ? planet.overview.content : isActive === 2 ? planet.structure.content : planet.geology.content}
				</S.Description>
				<S.Source>
        Source:
					<Link href={isActive === 1 ? planet.overview.source : isActive === 2 ? planet.structure.source : planet.geology.source} target="_blank">
          Wikipedia
						<img src={iconSource.src} />
					</Link>
				</S.Source>

			</S.Wrapper>
			<PlanetActions />
		</S.Container>
	);
}
