import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    cartItems : localStorage.getItem("domnerCart")
                ? JSON.parse(localStorage.getItem("domnerCart"))
                : [],
    cartTotalQuantity : 0,
    cartTotalAmount : 0,
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart(state, action){
            // console.log(state.cartItems);


            const itemIndex =  state.cartItems.findIndex(e => e.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("Ticket increased quantity...", {position : "bottom-left"});
            }
            else{
                const tempTicket = {...action.payload, cartQuantity : 1};
                state.cartItems.push(tempTicket);
                toast.success("Ticket added to cart...", {position : "bottom-left"});
            }
            
            localStorage.setItem("domnerCart", JSON.stringify(state.cartItems));
            
        },
        removeFromCart(state, action){
            const nextCartItem = state.cartItems.filter(e => e.id !== action.payload.id);
            state.cartItems = nextCartItem;
            toast.error("Tickets removed from cart...", {position : "bottom-left"});

            localStorage.setItem("domnerCart", JSON.stringify(state.cartItems));
        },

        clearCart(state, action){
            state.cartItems = [];
            toast.error("All Tickets removed from cart...", {position : "bottom-left"});

            localStorage.setItem("domnerCart", JSON.stringify(state.cartItems));
        },

        increaseItem(state, action){
            const itemIndex = state.cartItems.findIndex(e=> e.id === action.payload.id);

            state.cartItems[itemIndex].cartQuantity += 1;
            toast.info(`Ticket increased...`, {position : "bottom-left"});
            
            localStorage.setItem("domnerCart", JSON.stringify(state.cartItems));
        },
        decreaseItem(state, action){
            const itemIndex = state.cartItems.findIndex(e=> e.id === action.payload.id);
            
            if(state.cartItems[itemIndex].cartQuantity == 1){
                const nextCartItem = state.cartItems.filter(e => e.id !== action.payload.id);
                state.cartItems = nextCartItem;
                toast.error("Tickets removed from cart...", {position : "bottom-left"});
            }

            else if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`Ticket decreased...`, {position : "bottom-left"});
                
            }


            localStorage.setItem("domnerCart", JSON.stringify(state.cartItems));
        },

        getTotal(state, action){
            let {total, quantity} =  state.cartItems.reduce(
                (cartTotal, cartItem)=>{
                    const {price, cartQuantity} = cartItem;
                    const itemTotal = price * cartQuantity;
                    
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total : 0,
                    quantity : 0
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount   = total.toFixed(2);

        }


    }
});

export const {addToCart, removeFromCart, clearCart, increaseItem, decreaseItem, getTotal} = cartSlice.actions;
export default cartSlice.reducer;