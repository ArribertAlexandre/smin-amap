import React from 'react'; 
import Header from "./Header"; 
import Order from "./Order"; 
import Inventory from "./Inventory"; 

class App extends React.Component {
render()
	{
		return(
		<div className="amap">
		<div className="menu">
		<Header tagLine="Des bons legumes"/>
		</div>
		<Order/>
		<Inventory/>
		</div>
			  )
	}
}

export default App;