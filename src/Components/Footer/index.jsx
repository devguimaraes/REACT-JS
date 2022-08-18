import './style.css';

function Footer() {
	return (
		<footer>
			<div className="footer_container">
				<ul className="footer_lista">
					<li className="lista_item">
						<a
							href="https://pt-br.facebook.com/"
							rel="noreferrer"
							target="_blank"
						>
							<img
								className="lista_item--img"
								src="/img/fb.png"
								alt="logo facebook"
							/>
						</a>
					</li>
					<li className="lista_item">
						<a href="https://twitter.com/" rel="noreferrer" target="_blank">
							<img
								className="lista_item--img"
								src="/img/tw.png"
								alt="logo twitter"
							/>
						</a>
					</li>

					<li className="lista_item">
						<a
							href="https://www.instagram.com/
						"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="lista_item--img"
								src="/img/ig.png"
								alt="logo instagram"
							/>
						</a>
					</li>
				</ul>

				<div>
					<img className="footer_logo" src="/img/logo.png" alt="logo Organo" />
				</div>

				<div className="footer_paragrafo">
					<a
						href="https://github.com/devguimaraes"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Desenvolvido por Bruno Guimarães</p>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
