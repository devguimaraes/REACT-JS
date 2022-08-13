import CampoTexto from '../InputText';
import './form.css';

function Formulario() {
	return (
		<section className="formulario">
			<form className="formulario_forms">
				<h2 className="campo-texto-titulo">
					Preencha os dados para criar o card do colaborador.
				</h2>
				<CampoTexto label="Nome" placeholder="Digite seu nome" />
				<CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
				<CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
				<CampoTexto label="Time" />
			</form>
		</section>
	);
}

export default Formulario;
