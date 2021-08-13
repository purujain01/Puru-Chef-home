export const cartReducer = {
  //remove buyed product from cart  when user click proceed to buy
  makeEmptyCart:(state)=>{
  	let newProducts={}
  	for (let productId in state.cart.products) {
  			//if user not selected the products keep it on cart
  			if(!state.cart.products[productId].selected){
  				 newProducts[productId]={...state.cart.products[productId]}
  			}
  	}
  	state.cart.products=newProducts;
  	// throw new Error("ss")

  }
};
