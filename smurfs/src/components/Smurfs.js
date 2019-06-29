import React from 'react'

export const Smurfs = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <div className='smurf' key={smurf.id}>
                        <strong>{smurf.name}</strong>
                        <div>{smurf.age}</div>
                        <div>{smurf.height}</div>
                    </div>
                )
            })}
        </div>
    )
}