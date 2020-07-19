import React  from "react";
import "./collection.styles.scss";
import {useRouteMatch } from "react-router-dom";
import {useSelector} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'
import { addItemsToCart } from "../../redux/cart/cart.util";
import { CollectionItem } from "../collection-item/collection-item.component";

const Collection = () => {    
const match = useRouteMatch();
const collections = useSelector(selectCollection(match.params.categoryId));
console.log(match.params.categoryId)
console.log(collections)
const {title,items} = collections;
  return <div className="collection-page">    
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items && items.map(item=><CollectionItem key={item.id} item={item} ></CollectionItem>)}
    </div>

  </div>;
};

export default Collection;
