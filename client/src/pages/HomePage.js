import Billboard from "../components/billboard";
import Footer from "../components/footer";
import Header from "../components/header";
import ListBookmakers from "../components/listBookmakers";
import ListPredictions from "../components/listPredictions";
import Main from "../components/main";


function HomePage() {
	return(
		<div>
		<Header></Header>
		<Main><h1>hi HomePage</h1></Main>
		<ListPredictions></ListPredictions>
		<ListBookmakers></ListBookmakers>
		<Billboard></Billboard>
		<Footer></Footer>
		</div>
	)
}
export default HomePage;