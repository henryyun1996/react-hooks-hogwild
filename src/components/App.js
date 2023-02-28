import React, { useState } from "react";
import hogData from "../porkers_data";
import Nav from "./Nav";
import HogContainer from "./HogContainer"


function App() {
	// console.log(hogData)

	const [greasedHogs, setGreasedHogs] = useState(false)
	const [sort, setSort] = useState("")

	const toggleGrease = () => {
		setGreasedHogs(greaseStatus => !greaseStatus)
		console.log("is the filter on", greasedHogs)
	}

	const onlyGreased = hogObj => hogObj.greased

	const filteredHogs = greasedHogs ? hogData.filter( onlyGreased ): hogData

	const toggleSort = string => setSort(string)

	const byNameOrByWeight = ( hogA, hogB) => {
		switch( sort ) {
			case "name":
				if( hogA.name < hogB.name) {
					return -1
				} else {
					return 1
				}
			case "weight":
				return hogA.weight - hogB.weight
			default:
				return 0
		}

	}

	const sortedHogs = [...filteredHogs].sort( byNameOrByWeight )

	return (
		<div className="App">
			<Nav toggleGrease={toggleGrease} toggleSort={toggleSort} />
			<HogContainer hogData={sortedHogs} />
		</div>
	);
}

export default App;