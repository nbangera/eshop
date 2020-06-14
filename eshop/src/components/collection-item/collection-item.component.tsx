import React from "react";
import "./collection-item.styles.scss";
import { BackgroundImage } from "../common/backgrounImage.component";
import { IShopItem } from "../../pages/shop/shop-data";

interface IProps {
  item: IShopItem;
}
export const CollectionItem: React.FC<IProps> = ({ item }) => {
  const { imageUrl, name, price } = item;
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
    </div>
  );
};
