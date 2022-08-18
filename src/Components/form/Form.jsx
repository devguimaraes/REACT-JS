import { useState } from 'react';
import times from '../../data/times';
import Botao from '../button';
import CampoTexto from '../InputText';
import ListaSuspensa from '../ListaSuspensa/Index';
import './form.css';

function Formulario(props) {
	const { colaboradorCadastrado } = props;

	const [nome, setNome] = useState('');
	const [cargo, setcargo] = useState('');
	const [imagem, setImagem] = useState('');

	const [select, setSelect] = useState('');

	function aoSalvar(evento) {
		evento.preventDefault();

		colaboradorCadastrado({
			nome,
			cargo,
			imagem,
			select,
		});

		setNome('');
		setcargo('');
		setImagem('');
	}

	return (
		<section className="formulario">
			<form
				className="formulario_forms"
				onSubmit={(evento) => aoSalvar(evento)}
			>
				<h2 className="campo-texto-titulo">
					Preencha os dados para criar o card do colaborador.
				</h2>
				<CampoTexto
					requiredObrigatorio
					label="Nome"
					placeholder="Digite seu nome"
					value={nome}
					inputAlterado={(e) => setNome(e)}
				/>
				<CampoTexto
					requiredObrigatorio
					label="Cargo"
					placeholder="Digite seu Cargo"
					value={cargo}
					inputAlterado={(e) => setcargo(e)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Informe o endereço da imagem"
					value={imagem}
					inputAlterado={(e) => setImagem(e)}
				/>
				<ListaSuspensa
					requiredObrigatorio
					value={select}
					pegaValor={(evento) => setSelect(evento.target.value)}
					itens={times}
					label="Times"
				/>
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
}

export default Formulario;
