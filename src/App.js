import {BrowserRouter as Router} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {MyRoutes} from './components/Routes'

import './App.css';

function App() {
  return (
    <>
	<Router>
		<Header />
		<main className='container content'>
		<MyRoutes/>
		</main>
		<Footer />
	</Router>
	</>
  );
}

export default App;
