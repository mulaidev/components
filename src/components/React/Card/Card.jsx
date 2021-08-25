import React from 'react'

function Card(props) {
    const {images, title, author, times, badge} = props;

    return (
        <div className="max-w-md bg-white shadow-lg rounded my-20">
            <div className="relative">
                {badge && 
                    <div className="absolute bottom-0 left-0 px-4 py-4">
                        <span slot="badge" className="items-center justify-center px-2 py-1 text-xs font-regular leading-none text-white bg-indigo-500 rounded-md">{badge}</span>
                    </div>
                } 
                <img className="object-cover rounded-t-lg" src={images} alt="image" />
            </div>
                <div className="py-4 px-4">
                    <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
                    <h6 className="text-gray-400 text-sm font-regular mt-1">{author}</h6>
                    <h6 className="text-gray-400 text-sm font-regular mt-3">{times}</h6>
                </div>
        </div>
    )
}

export default Card
