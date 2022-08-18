import './button.css';

function Botao(props) {
	const { children } = props;

	return (
		<button type="submit" onClick={(e) => e.disabled(true)} className="botao">
			{children}
		</button>
	);
}

export default Botao;
