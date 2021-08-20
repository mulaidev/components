import React from 'react'

function FeatureSection(props) {
    const {image, title, description} = props
    return (
        <div className="container my-11 max-w-7xl px-11 sm:px-11 lg:px-22 xl:px-28 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="image">
                    <img className="max-w-2" src={image} alt="image" />
                </div>
                <div className="mx-4 description flex flex-col justify-center">
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm">{description}</p>
                </div>
            </div>   
       </div>
    )
}

export default FeatureSection
