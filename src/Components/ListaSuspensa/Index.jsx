import './ListaSuspensa.css';

function ListaSuspensa(props) {
	const { requiredObrigatorio } = props;
	const { itens } = props;
	const { label } = props;
	const { value } = props;
	const { pegaValor } = props;

	const aoDigitar = (e) => {
		pegaValor(e);
	};

	return (
		<div className="container-listaSuspensa">
			<label className="listaSuspensa-titulo" htmlFor={label}>
				{label}
			</label>
			<select
				required={requiredObrigatorio}
				value={value}
				onChange={(e) => aoDigitar(e.target.value)}
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
