import React from 'react'

function Navigation(props) {
    const {logo, navigationItems, navigationButton} = props;
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-3 py-3 bg-gray-300">
            <div className="container px-11 sm:px-11 lg:px-22 xl:px-28 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <img slot="logo" className="h-10" src={logo} />
                </div>
                <div className="lg:flex flex-grow items-center hidden" id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        {
                            navigationItems.map((item) => (
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs font-regular text-black leading-snug hover:font-bold" href="#">
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    <li className="nav-item">
                        <a className="text-gray-300 px-3 py-2 text-xs font-medium" href="/#">
                            <button type="submit" className="px-3 py-2 text-white bg-indigo-500 rounded focus:bg-indigo-600 focus:outline-none">
                            {navigationButton}
                            </button>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
