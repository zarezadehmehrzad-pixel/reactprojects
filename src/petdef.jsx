import './Pet.css'

const PetCard = () =>{
    const pet = {
        name:'leo',
        breed:'mamad',
        age:30
    }
    const {name, breed, age} = pet
    // const colors = {"brown, black"}
    return (
        <div>
            <h1>enformation</h1>
            <p className="red">{pet.name}</p>
            <p>{pet.breed}</p>
            <p className="green">{pet.age}</p>
        </div>
    )
}

export default PetCard