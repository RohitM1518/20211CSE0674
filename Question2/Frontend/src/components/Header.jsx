import React from 'react'
import { Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className=' bg-stone-950 text-white flex justify-center items-center p-4'>
            <ul className=' flex gap-32 '>
                <Link to={`/`}>
                    <li>Home</li>
                </Link>
                <Link to={`/getallproducts`}>
                    <li>All Products</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header