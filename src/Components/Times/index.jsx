import './times.css';

function Time(props) {
	const { nomeTime } = props;
	return (
		<section className="time-container">
			<h3>{nomeTime}</h3>
		</section>
	);
}

export default Time;
