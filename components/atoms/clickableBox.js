import React, {useState} from 'react';

const pokeData = [
    {name: 'Bulbasur', color: 'green'},
    {name: 'Charmander', color: 'red'},
    {name: 'Pikachu', color: 'yellow'},
]

const ClickableBox = () => {
    const [index, setIndex] = useState(0);

    const handleChange = (e) => {
        index < 2 ? setIndex(index + 1) : setIndex(0);
    }

    return (
        <div className="card" style={{backgroundColor: pokeData[index].color}}>
            <div className="card-body">
                <h5 className="card-title">
                    {pokeData[index].name}
                </h5>
                <a onClick={handleChange} className="btn btn-primary">Change me</a>
            </div>
        </div>
    )
}

export default ClickableBox;