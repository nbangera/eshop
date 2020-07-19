import React, { useState, useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../../components/collection/collection.component";

export const ShopPage = () => {  
  const match = useRouteMatch();
  
  return (
    <div className='shop-page'>
     <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
     <Route  path={`${match.path}/:categoryId`} component={Collection}></Route>
    </div>
  );
};
