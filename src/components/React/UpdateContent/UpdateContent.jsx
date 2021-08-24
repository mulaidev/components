import React from 'react'

function UpdateContent(props) {
    const {mainTitle, mainDescription, btnTitle, image} = props;
    return (
        <div class="update_content py-10">
            <div class="container px-11 sm:px-11 lg:px-22 xl:px-28 mx-auto">
                <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="hero-text col-span-6 text-center xl:text-left">
                    <h1 class="font-bold text-4xl md:text-5xl xl:text-5xl xl:leading-tight max-w-xl text-gray-900">
                        {mainTitle}
                    </h1>

                    <p class="text-gray-800 text-sm leading-relaxed mt-7 font-light mt-12">
                        {mainDescription}
                    </p>

                    <div class="hero-btn mt-10">
                        <button type="submit" class="px-4 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none">
                            {btnTitle}
                        </button>
                    </div>
                    </div>

                    <div class="hero-image col-span-6">
                        <img src={image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateContent
