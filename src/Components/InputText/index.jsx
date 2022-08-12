/* eslint-disable react/prop-types */
import './inputText.css';

function CampoTexto(props) {
	const { label } = props;
	const { placeholder } = props;

	return (
		<div className="campo-texto">
			<label htmlFor={label}>{label}</label>
			<input placeholder={placeholder} />
		</div>
	);
}

export default CampoTexto;
