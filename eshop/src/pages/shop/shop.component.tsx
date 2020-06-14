import React, { useState, useEffect } from "react";
import { IShop, SHOP_DATA } from "./shop-data";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

export const ShopPage = () => {
  const [collection, setcollection] = useState<IShop[]>();

  useEffect(() => {
    setcollection(SHOP_DATA);
  });

  return (
    <div>
      {collection?.map((item, idx) => (
        <CollectionPreview
          key={idx}
          title={item.title}
          items={item.items}
        ></CollectionPreview>
      ))}
    </div>
  );
};
