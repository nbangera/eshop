import React from "react";
import "./collection-overview.styles.scss";
import {useSelector} from 'react-redux'
import { CollectionPreview } from "../collection-preview/collection-preview.component";
import {selectCollectionsOverview} from '../../redux/shop/shop.selector'

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsOverview);
  return (
    <div className="collection-overview">
      {collections?.map((item, idx) => (
        <CollectionPreview
          key={idx}
          title={item.title}
          items={item.items}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default CollectionOverview;
