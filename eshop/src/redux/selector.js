import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./user/user.selector";
import { selectCartHidden, selectCartItems ,selectCartItemCount,selectCartItemTotalPrice} from "./cart/cart.selector";

export const headerContent = createStructuredSelector({
  user: selectCurrentUser,
  cart: selectCartHidden,
});

export const cartContent = createStructuredSelector({  
  cartItems: selectCartItems,
  itemCount:selectCartItemCount,
  totalPrice:selectCartItemTotalPrice
});


