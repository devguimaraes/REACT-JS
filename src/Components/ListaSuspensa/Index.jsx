import './ListaSuspensa.css';

function ListaSuspensa(props) {
	const { requiredObrigatorio } = props;
	const { itens } = props;
	const { label } = props;
	const { select } = props;
	const { pegaValor } = props;

	function aoDigitar(evento) {
		pegaValor(evento.target.value);
	}

	return (
		<div className="container-listaSuspensa">
			<label className="listaSuspensa-titulo" htmlFor={label}>
				{label}
			</label>
			<select
				value={select}
				required={requiredObrigatorio}
				onChange={(e) => aoDigitar(e)}
				name={itens[itens]}
				id={itens[itens]}
			>
				{itens.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
}

export default ListaSuspensa;
