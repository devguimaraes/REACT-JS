/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/form/Form';

import Time from './Components/Times';
import times from './data/times';

function App() {
	const [colaboradores, setColaborador] = useState([]);

	function aoNovoColaborador(colaborador) {
		setColaborador(...colaboradores, colaborador);
	}

	return (
		<>
			<Banner />
			<Formulario
				colaboradorCadastrado={(colaborador) => aoNovoColaborador(colaborador)}
			/>
			{times.map((evento) => (
				<Time
					nomeTime={evento.nome}
					corPrimaria={evento.primary}
					corSecundaria={evento.secundary}
				/>
			))}
		</>
	);
}

export default App;
