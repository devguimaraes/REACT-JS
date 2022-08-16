/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/form/Form';
import Time from './Components/Times';

function App() {
	const [colaboradores, setColaborador] = useState([]);

	function aoNovoColaborador(colaborador) {
		setColaborador(...colaboradores, colaborador);
		console.log(colaborador);
	}

	return (
		<>
			<Banner />
			<Formulario
				colaboradorCadastrado={(colaborador) => aoNovoColaborador(colaborador)}
			/>
			<Time nomeTime="Programção" />
			<Time nomeTime="Front-End" />
			<Time nomeTime="Data Science" />
			<Time nomeTime="Devops" />
			<Time nomeTime="UX e Design" />
			<Time nomeTime="Mobile" />
			<Time nomeTime="Inovação e Gestão" />
		</>
	);
}

export default App;
