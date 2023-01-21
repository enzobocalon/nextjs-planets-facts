import { PlanetData } from '@/types/PlanetData';
import Box from '../Box';
import * as S from './styles';

interface Props {
  planet: PlanetData
}

export default function Footer({planet}: Props) {
	return (
		<S.Container>
			<Box isClickable={false} shouldRenderAsColumns={true} active={false}>
				<span>ROTATION TIME</span>
				<p>{planet.rotation}</p>
			</Box>
			<Box isClickable={false} shouldRenderAsColumns={true} active={false}>
				<span>REVOLUTION TIME</span>
				<p>{planet.revolution}</p>
			</Box>
			<Box isClickable={false} shouldRenderAsColumns={true} active={false}>
				<span>RADIUS</span>
				<p>{planet.radius}</p>
			</Box>
			<Box isClickable={false} shouldRenderAsColumns={true} active={false}>
				<span>AVERAGE TEMP.</span>
				<p>{planet.temperature}</p>
			</Box>
		</S.Container>
	);
}
