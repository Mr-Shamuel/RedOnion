import { useState } from "react"
import { toast } from "react-toastify";

const useProduct = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart);
        toast("Product added")
        console.log(cart.length)
    }
    return {

        cart,
        setCart,
        handleAddToCart
    }

}

export default useProduct;