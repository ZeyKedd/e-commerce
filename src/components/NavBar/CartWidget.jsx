import './CartWidget.Module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import CartCounter from '../cart/CartCounter';

const CartWidget = () => {
    return (
        <div className='div-cartWidget' >
            <Link to="/perfil">
                <button className='button' >
                    <VscAccount size={30} />
                </button>
            </Link>
            <Link to="/cart">
                <button className='button' >
                    <AiOutlineShoppingCart size={30} />
                </button>
            </Link>
            <CartCounter hideparrafo={true}/>  
        </div>
    )
}

export default CartWidget