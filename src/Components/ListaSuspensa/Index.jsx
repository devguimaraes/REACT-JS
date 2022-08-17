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
				name={itens.map((e) => e.nome)[itens.map((e, i) => i)]}
				id={itens.map((e) => e.nome)[itens.map((e, indice) => indice)]}
			>
				{itens.map((item) => (
					<option key={item.nome}>{item.nome}</option>
				))}
			</select>
		</div>
	);
}

export default ListaSuspensa;
