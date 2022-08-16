/* eslint-disable react/prop-types */
import './inputText.css';

function CampoTexto(props) {
	const { label } = props;
	const { placeholder } = props;
	const { requiredObrigatorio } = props;

	const { nome } = props;
	const { inputAlterado } = props;

	const aoDigitado = (e) => {
		inputAlterado(e.target.value);
	};

	return (
		<div className="campo-texto">
			<label htmlFor={label}>{label}</label>
			<input
				value={nome}
				onChange={(e) => aoDigitado(e)}
				required={requiredObrigatorio}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default CampoTexto;
