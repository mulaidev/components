import React from 'react'

function Navbar(props) {
    const {logo, navbarItems, navbarBtn} = props;

    return (
        <div>
            <nav className="bg-white dark:bg-gray-800 shadow py-2">
                <div className="max-w-7xl px-11 sm:px-11 lg:px-22 xl:px-28 mx-auto">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                        <a className="flex-shrink-0" href="/">
                            <img className="h-10" src={logo} alt="Logo" />
                        </a>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                            {
                                navbarItems.map((item) => (
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        {item}
                                    </a>
                                ))
                            }
                            <a className="text-gray-300 px-3 py-2 text-sm font-medium" href="/#">
                                <button type="submit" className="px-3 py-2 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none">
                                    {navbarBtn}
                                </button>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
