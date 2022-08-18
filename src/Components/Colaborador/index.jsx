import './Colaborador.css';

function Colaborador(props) {
	const { nome } = props;
	const { cargo } = props;
	const { imagem } = props;
	const { corPrimaria } = props;

	return (
		<div className="colaborador-container">
			<div
				className="colaborador-card-cima"
				style={{ backgroundColor: corPrimaria }}
			>
				<img
					className="colaborador-imgPerfil"
					src={imagem || 'https://github.com/devguimaraes.png'}
					alt="Foto de perfil do colaborador"
				/>
			</div>

			<div className="colaborador-card-baixo">
				<h4 className="colaborador-nome">{nome}</h4>
				<h5 className="colaborador-cargo">{cargo}</h5>
			</div>
		</div>
	);
}

export default Colaborador;
