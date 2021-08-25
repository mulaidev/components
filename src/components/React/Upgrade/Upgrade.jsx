import React from 'react'

function Upgrade(props) {
    const {image, title, description, currency, price, btnAccept, btnReject, alert} = props
    return (
        <div>
            {alert ?
                (<div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg mx-auto md:mx-0">
                <div className="w-sm">
                    <div className="flex justify-center">
                        <img className="w-28" src={image} alt="image" />
                    </div>
                    <div className="mt-4 text-black text-center">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p className="mt-4 text-gray-600 text-sm">{description}</p>
                        <h2 className="flex justify-start justify-center mt-8 text-black text-6xl font-bold"><span className="text-base mx-2">{currency}</span>{price}</h2>
                        <p className="mt-2 text-gray-400 text-sm">/ pay per month</p>
                        <button className="mt-8 mb-4 py-2 px-14 rounded bg-indigo-500 text-sm text-white tracking-widest hover:bg-indigo-400 transition duration-200">{btnAccept}</button>
                    </div>
                </div>
            </div>) :
            (<div class="flex py-4 pl-4 pr-10 leading-normal text-gray-900 bg-red-100 rounded-lg" role="alert">
                    <img className="mx-6 w-12" src={image} alt="" />
                    <div className="mx-8 flex flex-col justify-center">
                        <h1 className="text-sm font-bold">Upgrade your account to Unlock PRO Features</h1>
                        <p className="text-sm mt-2">The List importing has more contacts than your account allows. You can upgrade your account, archive, or delete accounts</p>
                    </div>
                    <div className="flex">
                        <button className="mt-8 mb-4 py-2 px-4 rounded bg-indigo-500 text-sm text-white tracking-wide hover:bg-indigo-400 transition duration-200">{btnAccept}</button>
                        <button className="mt-8 mb-4 py-2 px-4 ml-4 rounded bg-white text-sm text-black tracking-wide hover:bg-indigo-400 transition duration-200">{btnReject}</button>
                    </div>
                </div>)
            }      
        </div>
    )
}

export default Upgrade
