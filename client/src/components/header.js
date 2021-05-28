import Burger from "./burger"
import IntButton from "./intButton"
import Navigation from "./navigation"
import Search from "./search"

const Header =()=>{
	return (
		<div>
		<Navigation></Navigation>
		<p>it`s Header</p>
		<IntButton></IntButton>
		<Search></Search>
		<Burger></Burger>
		</div>
	)
}

export default Header