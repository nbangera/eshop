import React from "react";
import "./collection-preview.styles.scss";
import { IShop, IShopItem } from "../../models/shop";
import { CollectionItem } from "../collection-item/collection-item.component";

interface IProps {
  title: string;
  items: IShopItem[];
}

export const CollectionPreview: React.FC<IProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">   
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};
