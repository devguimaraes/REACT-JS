/* eslint-disable react/prop-types */
import './inputText.css';

function CampoTexto(props) {
	const { label } = props;
	const { placeholder } = props;
	const { requiredObrigatorio } = props;

	const { value } = props;
	const { inputAlterado } = props;

	const aoDigitado = (e) => {
		inputAlterado(e);
	};

	return (
		<div className="campo-texto">
			<label htmlFor={label}>{label}</label>
			<input
				value={value}
				onChange={(e) => aoDigitado(e.target.value)}
				required={requiredObrigatorio}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default CampoTexto;
