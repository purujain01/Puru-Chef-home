import { createSlice ,current} from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducer";

import {fetchCart, updateCart, addToCart,removeFromCart } from "../asyncRequests/cartRequest";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
  	cart:{
		  	loading:true,
		    products: {},
		    total:0,
		    error:"",
        isCached:false
		  },
  },
  reducers:cartReducer,
  extraReducers: {
  	[fetchCart.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  		state.cart.loading=true;
  	},
  	
  	[fetchCart.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      state.cart.loading=false;
      state.cart.products={...action.payload.products};
      state.cart.total=action.payload.total;
      state.cart.totalItems=Number(action.payload.totalItems);
      state.cart.isCached=true;
    },
    
    [fetchCart.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      state.cart.loading=false;
      state.cart.error=action.payload;
    },
    
    [removeFromCart.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  		state.cart.loading=true;

  	},
  	
  	[removeFromCart.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      let {checked,productId,quantity}=action.payload;
      let cart=state.cart;
      if(productId && quantity){
        if (checked) {
          //calculating new total and total items
          let price = cart.products[productId].price;
          cart.total=cart.total-(price*quantity);
          cart.totalItems-=Number(quantity);
        }
        delete cart.products[productId];
      }
      state.cart.loading=false;
    },

    [removeFromCart.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      delete state.cart.products[action.payload.productId];
	    state.cart.loading=false;
    },

    [updateCart.pending]: (state, action) => {
      console.log(state,action,"pending");
      let {productId} = action.meta.arg;
      state.cart.products[productId].loading = true;
    },

    [updateCart.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      let cart = state.cart;
      let{productId,quantity,checked}=action.payload ;
      //getting current price and quality
      let price = cart.products[productId].price;
      let olderQuantity =  cart.products[productId].quantity;
      
      if (checked == cart.products[productId].selected) {
        cart.total = cart.total+price*(quantity-olderQuantity);
        cart.totalItems += Number(quantity)-Number(olderQuantity);
      } else {
        if (checked) {
          //if checked add price and total items
          cart.total = cart.total+price*quantity;
          cart.totalItems += Number(quantity);
        } else {
          //if he unchecked subtract the total and items
          cart.total = cart.total-price*quantity;
          cart.totalItems -= Number(quantity);
        }
      }
      cart.products[productId].selected = checked;
      cart.products[productId].quantity = quantity;
      cart.products[productId].loading = false;
    },

    [updateCart.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      let cart = state.cart;
      let {productId} = action.meta.arg;
      cart.products[productId].loading = false;      	
    },

    [addToCart.pending]: (state, action) => {
      console.log(state,action,"pending");
    },

    [addToCart.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      let cart = state.cart;
      let{product,productId,quantity}=action.payload;
      //when user click add to cart we need to add that 
      //product in our local product var
      if (cart.products[productId]) {
        cart.total+=product.price*(quantity-cart.products[productId].quantity);
        cart.totalItems+=(Number(quantity)-Number(cart.products[productId].quantity));
        cart.products[productId]={...cart.products[productId],quantity:quantity,selected:true,loading:false};
      } else {
        cart.total+=product.price*quantity;
        cart.totalItems+= Number(quantity);
        cart.products[productId]=product;
        cart.products[productId]={...cart.products[productId],quantity:quantity,selected:true,loading:false};
      }
    },

    [addToCart.rejected]: (state, action) => {
      console.log(state,action,"rejected");
    }
  }
});

export default cartSlice.reducer;
export const {makeEmptyCart} = cartSlice.actions;


