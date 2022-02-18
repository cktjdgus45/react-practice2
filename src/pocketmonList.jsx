import React from 'react';

const PocketmonList = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <>
            {pokemon.map(p => (
                <p key={p}>{p}</p>
            ))}
        </>
    )
}


export default PocketmonList;