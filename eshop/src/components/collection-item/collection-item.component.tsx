import React from "react";
import "./collection-item.styles.scss";
import { BackgroundImage } from "../common/backgrounImage.component";
import { IShopItem } from "../../models/shop";
import { CustomButton } from "../common/controls/button/button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

interface IProps {
  item: IShopItem;
}
export const CollectionItem: React.FC<IProps> = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      {/* <div className='image' style={BackgroundImage(ShopItem.imageUrl)}></div> */}
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton isGoogleSignIn={false} inverted={true} type="button" onClick={()=>dispatch(addItem(item))}>Add to cart</CustomButton>
    </div>
    
  );
};
