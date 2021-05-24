import {BrowserRouter as Router} from 'react-router-dom';
import router from './routers';


function App() {
	const routes = router()
	return(
		<Router>
			<div className="container">
				{routes}
			</div>
		</Router>
	)
}
export default App