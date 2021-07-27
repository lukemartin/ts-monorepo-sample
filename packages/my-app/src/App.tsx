import React from 'react';
import logo from './logo.svg';
import './App.css';
import { shout, up } from 'utils';
import { Button, Text } from 'ds';

function App() {
	shout(up('beep there though, for real??'));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<Button>hello</Button>

				<Text isBeep>Hello</Text>
			</header>
		</div>
	);
}

export default App;
