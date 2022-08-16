/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/form/Form';

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
		</>
	);
}

export default App;
