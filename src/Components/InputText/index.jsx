/* eslint-disable react/prop-types */
import './inputText.css';

function CampoTexto(props) {
	const { label } = props;
	const { placeholder } = props;
	const { requiredObrigatorio } = props;

	return (
		<div className="campo-texto">
			<label htmlFor={label}>{label}</label>
			<input required={requiredObrigatorio} placeholder={placeholder} />
		</div>
	);
}

export default CampoTexto;
