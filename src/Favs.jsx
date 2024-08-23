
function FavFood() {
    const food = ['pizza','wing','fries'];
    const foodList = food.map((fod)=>{return <li key={fod}>{fod}</li>});
    return(
        <>
            <h1>Fav Food</h1>
            <ul>
                {foodList}
            </ul>
        </>
    );
}

function FavPet(){
    return <b>cat</b>;
}

export {FavFood,FavPet};