import Head from 'next/head';
import Header from '@/components/Header';
import * as Theme from '@/styles/themes';
import * as S from '../styles/home';
import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import PlanetPicture from '@/components/PlanetPicture';
import PlanetDescription from '@/components/PlanetDescription';
import Footer from '@/components/Footer';
import { useMemo, useState } from 'react';
import { Planets } from '@/types/Planet';
import ActionProvider from '@/context/ActionContext';
import data from '../data/index.json';
import { PlanetData } from '@/types/PlanetData';

export default function Home() {
	const [planet, setPlanet] = useState<Planets>('Earth');

	const currentTheme = useMemo(() => {
		return Theme[planet] || Theme['Earth'];
	}, [planet]);

	const currentPlanet = useMemo<PlanetData>(() => {
		return data.filter(current => current.name === planet)[0];
	}, [planet]);

	return (
		<ThemeProvider theme={currentTheme}>
			<ActionProvider>
				<Head>
					<title>Planets Fact</title>
				</Head>

				<Header planet={planet} setPlanet={setPlanet}/>
				<S.MainContent>
					<PlanetPicture planet={currentPlanet}/>
					<PlanetDescription planet={currentPlanet}/>
				</S.MainContent>

				<S.FooterContainer>
					<Footer planet={currentPlanet}/>
				</S.FooterContainer>

				<GlobalStyle />
			</ActionProvider>
		</ThemeProvider>
	);
}
