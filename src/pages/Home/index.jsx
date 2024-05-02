import ipc from 'terv-ipc';
import '../../assets/style.css';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { React, useState, useEffect } from "react";

export default function Home() {

	const [hello, setHello] = useState();

	const closeWindow = () => {
		let ok = confirm("Tem certeza que deseja fechar o aplicativo?");
		if (ok) ipc.close();
	};

	const maximizeWindow = () => {
		ipc.toggle();
	};

	const minimizeWindow = () => {
		ipc.hide();
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await ipc.route('Hello', 'print');
			setHello(response);
		};
		fetchData();

	}, []);

	return (
		<div className="row">

			<div className="fixed-top bg-light p-1 shadow">
				<div className="d-flex justify-content-end">
					<button className="btn btn-sm btn-secondary me-1 drag-region" style={{
						WebkitAppRegion: 'drag'
					}}><i className="bi bi-arrows-move"></i></button>
					<button className="btn btn-sm btn-danger me-1" onClick={closeWindow}><i className="bi bi-x-square"></i></button>
					<button className="btn btn-sm btn-secondary me-1" onClick={minimizeWindow}><i className="bi bi-dash-square"></i></button>
					<button className="btn btn-sm btn-primary me-1" onClick={maximizeWindow}><i className="bi bi-fullscreen"></i></button>
				</div>
			</div>
			<div class="px-4 text-center">
				<img class="d-block mx-auto mb-4" src={logo} alt="" width="100" height="90" />
				<h1 class="display-5 fw-bold title">Terv.js</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead mb-4">Desbrave o Terv.JS: a rota rápida e descomplicada para criar aplicativos desktops. Combinando ElectronJS, React e Vite, o Terv simplifica a comunicação e agiliza o desenvolvimento. Construa e empacote sua solução de software desktop de forma simples e eficaz, com integrações avançadas ao sistema operacional.</p>
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<a class="btn btn-secondary btn-lg px-4 gap-3"
							target="_blank"
							href="https://github.com/paulo-leo/terv">
							<i class="bi bi-github"></i> Colabore no GitHub</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/pauloleo-dev/"
							class="btn btn-outline-primary btn-lg px-4"><i class="bi bi-linkedin"></i> Conecte-se no LinkedIn</a>
					</div>
					<div className="m-4">###---{hello}---###</div>
				</div>
			</div>
		</div>
	);
}