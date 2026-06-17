function Card({name, price, details, category}){
    return(
        <div className="card">
            <h1>{name}</h1>
            <h3>price: {price}</h3>
            <h4>info: {details}</h4>
            <button>add</button>
            <h5>{category}</h5>
        </div>
    )
}

export default Card