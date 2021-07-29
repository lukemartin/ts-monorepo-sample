import logo from './logo.svg';
import './App.css';
import { shout, up } from '@example/utils';
import { Button, Text } from '@example/ds';
import { Box } from 'components/Box';

function App() {
	shout(up('beep there though, for real??'));

	return (
		<div className="App">
			<header className="App-header">
				<Box>
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
						Learn React then asdad
					</a>

					<Button>hello there</Button>

					<Text isBeep>Hello</Text>
				</Box>
			</header>
		</div>
	);
}

export default App;
