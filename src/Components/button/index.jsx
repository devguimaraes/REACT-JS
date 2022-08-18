import './button.css';

function Botao(props) {
	const { children } = props;

	return (
		<button type="submit" className="botao">
			{children}
		</button>
	);
}

export default Botao;
