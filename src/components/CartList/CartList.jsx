import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart, increaseItem, decreaseItem, getTotal } from "../../features/cartSlice";
const CartList = () =>{

    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotal());
    }, [cart]);
    const handleRemoveFromCart = (item) =>{
        dispatch(removeFromCart(item));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const handleIncreaseItem = (item) =>{
        dispatch(increaseItem(item));
    }
    const handleDecreaseItem = (item) =>{
        dispatch(decreaseItem(item));
    }


    
    return(
        cart.cartItems.length === 0
        ? 
        <div className="p-5 m-5 container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center">
                        <h1>Empty Cart <i className="fa-solid fa-box-open text-orange"></i></h1>
                        <Link to={`/attraction`} className="mt-5 btn fs-5"><i className="fa-solid fa-backward text-orange"></i> Back to find some ticket</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <>
            <div className="container-fluid mt-5">
            <div className="container">
                <div className="row border-bottom">
                    <div className="col-2">Thumbnail</div>
                    <div className="col-2">Title</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Quantity</div>
                    <div className="col-2">Total</div>
                    <div className="col-2">Action</div>
                </div>
                {
                    cart.cartItems.map(item => 
                        <div key={item.id} className="row border-bottom">
                            <div className="col-2 d-flex align-items-center">
                                <img width={100} height={100} src={item.thumbnail} alt="" />
                            </div>
                            <div className="col-2 d-flex align-items-center">
                                {item.title}
                            </div>
                            <div className="col-2 d-flex align-items-center">{item.price}$</div>
                            <div className="col-2 d-flex align-items-center">
                                <div>
                                    <button className="btn me-2" onClick={()=>handleDecreaseItem(item)}>-</button>
                                    {item.cartQuantity}
                                    <button className="btn ms-2" onClick={()=>handleIncreaseItem(item)}>+</button>
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center">{(item.cartQuantity * item.price).toFixed(2)}$</div>
                            <div className="col-2 d-flex align-items-center">
                                <button onClick={()=>handleRemoveFromCart(item)} className="btn btn-outline-none"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                            </div>
                        </div>    
                    )
                }
            </div>
            <div className="container mt-4">
                <div className="col-3">
                    <button className="btn btn-danger" onClick={()=>handleClearCart()}>Clear Cart</button>
                </div>
            </div>

            
        </div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-3 radio-group">
                                <div className="row d-flex px-3 radio">
                                    <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg"/>
                                    <p className="my-auto">Credit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio gray">
                                    <img className="pay" src="https://i.imgur.com/OdxcctP.jpg"/>
                                    <p className="my-auto">Debit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio gray mb-3">
                                    <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg"/>
                                    <p className="my-auto">PayPal</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="row px-2">
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">Name on Card</label>
                                        <input type="text" id="cname" name="cname" placeholder="Johnny Doe"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">Card Number</label>
                                        <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/>
                                    </div>
                                </div>
                                <div className="row px-2">
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">Expiration Date</label>
                                        <input type="text" id="exp" name="exp" placeholder="MM/YYYY"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="***"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-2">
                                <div className="row d-flex justify-content-between px-4">
                                    <p className="mb-1 text-left">Cart</p>
                                    {
                                        cart.cartItems.map(e=><p className="fw-light" key={e.id}>- {e.title.substring(0,35)}...</p>)
                                    }
                                </div>
                                
                                <div className="row d-flex justify-content-between px-4" id="tax">
                                    <p className="mb-1 text-left">Total (tax included)</p>

                                    <h6 className="mb-1 text-right">{cart.cartTotalAmount}$</h6>
                                </div>
                                <div className="row d-flex justify-content-between px-4" id="tax">
                                <button className="btn-block btn-orange ">
                                    <span>
                                        <span id="btn bg-orange">Checkout </span>
                                        
                                    </span>
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartList;