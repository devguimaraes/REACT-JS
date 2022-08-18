/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Formulario from './Components/form/Form';

import Time from './Components/Times';
import times from './data/times';

function App() {
	const [colaboradores, setColaborador] = useState([]);

	function aoNovoColaborador(colaborador) {
		setColaborador([...colaboradores, colaborador]);
	}

	return (
		<>
			<Banner />
			<Formulario
				colaboradorCadastrado={(colaborador) => aoNovoColaborador(colaborador)}
			/>
			{times.map((evento) => (
				<Time
					key={evento.nome}
					nomeTime={evento.nome}
					corPrimaria={evento.primary}
					corSecundaria={evento.secundary}
					colaboradores={colaboradores.filter(
						(para) => para.select === evento.nome
					)}
				/>
			))}
			<Footer />
		</>
	);
}

export default App;
