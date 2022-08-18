/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/form/Form';

import Time from './Components/Times';
import times from './data/times';

function App() {
	const [colaboradores, setColaborador] = useState([]);

	function aoNovoColaborador(colaborador) {
		setColaborador([...colaboradores, colaborador]);
		// TODO os dados do formulário são salvos aqui
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
		</>
	);
}

export default App;
