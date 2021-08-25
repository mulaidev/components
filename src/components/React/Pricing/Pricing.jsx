import React from 'react';

function Pricing(props) {
    const {badge, currency, price, license, button, feature, description, children} = props;

    const showAnyChildren = (
        <div dangerouslySetInnerHTML={{__html: children.props.value}}></div>
    )

    const showDescription = (
        <div>
            <p className="text-indigo-100 text-base mb-8">{description}</p>
            <ul className="list-inside list-disc mb-2">
                 {feature.map(itemFeature => (
                     <li className="mb-2">{itemFeature}</li>
                 ))}
            </ul>
        </div>
    )

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md rounded-3xl overflow-hidden shadow-lg bg-indigo-500 text-white p-8">
                {badge && (<div className="text-right"><span className="inline-block uppercase text-white bg-indigo-700 rounded-full px-5 py-1 text-sm font-semibold mb-2">{badge}</span></div>)}
                <h2 className="font-bold text-4xl mb-8">{currency}{price} <small className="text-sm font-thin">/month</small></h2>
                <h3 className="font-bold text-xl mb-8">{license}</h3>
                
                {/* Get Children or Slot from Parent */}
                {children && showAnyChildren}
                
                {/* Toggle Description */}
                {description && showDescription}
                
                <select className="bg-indigo-500 mt-8 mb-8 p-2 block w-full rounded-md border border-white ring-0 ring-offset-0 outline-none">
                    <option>1-5 Users</option>
                    <option>6-20 Users</option>
                    <option>21-50 Users</option>
                </select>
                <a href={button} className="p-3 rounded-xl bg-green-400 text-white text-center block">Choose plan</a>
            </div>
        </div>
    )
}

export default Pricing
