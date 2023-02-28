import HogsCard from "./HogsCard"

function HogContainer({ hogData }) {
    // console.log(hogData)
    const renderHogCard = (hogData.map((hog) => {
        return <HogsCard key={hog.name} hog={hog}/>
        }))
    return(
        <div className="ui grid container">
            {renderHogCard}
        </div>
    )
}

export default HogContainer;