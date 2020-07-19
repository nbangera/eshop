import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectShopCollections = createSelector(
  [shop],
  (state) => state.collections
);

export const selectCollectionsOverview = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map(key=>collections[key])
  );

export const selectCollection = memoize((categoryId) =>
  createSelector([selectShopCollections], (collections) =>
    collections[categoryId]
  ));
