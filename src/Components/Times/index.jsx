import Colaborador from '../Colaborador';
import './times.css';

function Time(props) {
	const { nomeTime } = props;
	const { corPrimaria } = props;
	const { corSecundaria } = props;
	const { colaboradores } = props;

	return (
		colaboradores.length > 0 && (
			<section
				className="time-container"
				key={nomeTime}
				style={{ backgroundColor: corSecundaria }}
			>
				<h3 style={{ borderBottomColor: corPrimaria }}>{nomeTime}</h3>
				<div className="time-colaboradores">
					{colaboradores.map((funcionario) => (
						<Colaborador
							key={funcionario.nome}
							corPrimaria={corPrimaria}
							nome={funcionario.nome}
							cargo={funcionario.cargo}
							imagem={funcionario.imagem}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Time;
