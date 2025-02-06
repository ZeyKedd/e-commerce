import './CartWidget.Module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className='cartWidget' >
            <ul>
                <li>

                    <Link to="/perfil">
                        <button className='' >
                            <VscAccount size={30} />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <button className='' >
                            <AiOutlineShoppingCart size={30} />
                        </button>
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default CartWidget