import { useState } from "react"

function Test(){
    const [petData, setPetData] = useState({
        id : 1,
        name: 'daryush',
        isvacsinaded: true,
        age: 1
    })
    const [value,setValue] = useState('')
    const handleChange = (e)=>{
        setValue(e.target.value)
        setPetData(perv=> ({...perv, 'owner':value}))
        console.log(perData)
    }
    const handleClick = (e)=>{
        setPetData(prev=> ({...perv, 'owner':value}))
    }
    return(
        <div>
            <h1>pet name: {petData.name}</h1>
            <h3>pet age: {petData.age}</h3>
            <h3>is vaksinaded:{petData.isvacsinaded ? 'yes' : 'no'} </h3>
            <p>owner ; {petData.owner}</p>
            <label htmlFor="">owner:</label>
            <input type="text" value={value} onChange={handleChange}/>
            <button onclick={handleClick}>clickme</button>
        </div>
    )
}

export default Test