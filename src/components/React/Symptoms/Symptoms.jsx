import React from 'react'

function Symptoms(props) {
    const {header, title, image} = props;
    return (
        <div className="container mx-auto text-center p-15">
            <h2 className="font-bold text-3xl mb-5">
                {header}
            </h2>
            <p className="max-w-lg mx-auto">
                {title}
            </p>
            <img className="mx-auto w-auto" src={image} alt="SymptomsImage" />
        </div>
    )
}

export default Symptoms
