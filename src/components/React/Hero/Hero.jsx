import React from 'react'

function Hero(props) {
    const {mainTitle, mainDescription, btnTitle, mainImage} = props;
    return (
        <div className="hero py-20">
            <div className="container px-11 sm:px-11 lg:px-22 xl:px-28 mx-auto">
                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"> 
                    <div className="hero-text col-span-6 text-center xl:text-left">
                        <h1 className="font-bold text-4xl md:text-5xl xl:text-5xl xl:leading-tight max-w-xl text-gray-900">
                            <span>{mainTitle}</span>
                        </h1>

                        <p className="text-gray-800 text-sm leading-relaxed mt-7 font-light mt-12">
                            <span>{mainDescription}</span>
                        </p>

                        <div className="hero-btn mt-10">
                            <button type="submit" className="px-4 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none">
                                <span>{btnTitle}</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-image col-span-6">
                        <img src={mainImage} alt="Image Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
