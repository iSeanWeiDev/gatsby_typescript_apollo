import * as Place from './place.gql';

export default {
  queries: {
    loadPlaces: Place.LoadPlaces,
    loadPlaceTypes: Place.LoadPlaceTypes,
  },
};
