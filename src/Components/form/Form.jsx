import times from '../../data/times';
import Botao from '../button';
import CampoTexto from '../InputText';
import ListaSuspensa from '../ListaSuspensa/Index';
import './form.css';

function aoSalvar(evento) {
	evento.preventDefault();
	console.log('Form foi submetido');
}

function Formulario() {
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
				/>
				<CampoTexto
					requiredObrigatorio
					label="Cargo"
					placeholder="Digite seu Cargo"
				/>
				<CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
				<ListaSuspensa requiredObrigatorio itens={times} label="Times" />
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
}

export default Formulario;
