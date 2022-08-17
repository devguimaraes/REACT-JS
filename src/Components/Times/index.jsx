import './times.css';

function Time(props) {
	const { nomeTime } = props;
	const { corPrimaria } = props;
	const { corSecundaria } = props;

	return (
		<section
			className="time-container"
			key={nomeTime}
			style={{ backgroundColor: corSecundaria }}
		>
			<h3 style={{ borderBottomColor: corPrimaria }}>{nomeTime}</h3>
		</section>
	);
}

export default Time;
