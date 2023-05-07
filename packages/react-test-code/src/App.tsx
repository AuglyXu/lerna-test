import './App.css';
import pic from './image_default_bar02_dark.png';
import { echartsLayer } from 'insight-iclient-leaflet';

console.log('echartsLayer', echartsLayer({}))
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={pic} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
