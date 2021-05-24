import {Switch, Route, Redirect} from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import AuthPage from './pages/AuthPage'
import CategoryPredictionsPage from './pages/CategoryPredictionsPage'
import HomePage from './pages/HomePage'
import PredictionPage from './pages/PredictionPage'
import TrainingPage from './pages/TrainingPage'
import TrainingsListPage from './pages/TrainingsListPage'
import UserPage from './pages/UserPage'

const router =()=>{
	return(
		<Switch>
			<Route path="/auth" exact>
				<AuthPage/>
			</Route>
			<Route path="/articles/:id" >
				<ArticlePage/>
			</Route>
			<Route path="/articles" exact>
				<ArticlesListPage/>
			</Route>
			<Route path="/admin" exact>
				<AdminPage/>
			</Route>
			<Route path="/predictions" exact>
				<CategoryPredictionsPage/>
			</Route>
			<Route path="/" exact>
				<HomePage/>
			</Route>
			<Route path="/predictions/:id" >
				<PredictionPage/>
			</Route>
			<Route path="/user" exact>
				<UserPage/>
			</Route>
			<Route path="/trainings/:id" >
				<TrainingPage/>
			</Route>
			<Route path="/trainings" exact>
				<TrainingsListPage/>
			</Route>
			<Redirect to="/"/>
		</Switch>

	)
}
export default router