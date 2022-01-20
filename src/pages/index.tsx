import React, { useEffect, useState } from 'react';
import { Option } from 'react-dropdown';
import { AppLayout } from '@/layouts';
import { HomeFilter, HomePlaces, HomeMap } from '@/containers/Home';
import { useAppQuery } from '@/utils/apollo';
import { IPlaceFilter, IGeoLocation } from '@/types/place';
import graphql from '@/graphql/external';

type LeadPlaceFilterBy = {
  search?: string;
  location?: string;
  features?: string[];
  categories?: (string | number)[];
};

function Home() {
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>();
  const [filterBy, setFilterBy] = useState<LeadPlaceFilterBy>();
  const [geolocations, setGeolocations] = useState<IGeoLocation[]>();

  const { loading: pLoading, loadedData: pData } = useAppQuery({
    query: graphql.queries.loadPlaces,
    variables: {
      cursor: { page: 0, size },
      sortBy,
      filterBy,
    },
    key: `places`,
  });

  useEffect(() => {
    if (!pLoading && pData) {
      const tmp = pData.data.map((el) => el.geolocation);
      setGeolocations(tmp);
    }
  }, [pLoading, pData]);

  const { loading: ptLoading, loadedData: ptData } = useAppQuery({
    query: graphql.queries.loadPlaceTypes,
    variables: {},
    key: `placeTypes`,
  });

  const handleFilterChange = (value: IPlaceFilter[]) => {
    value.forEach((el) => {
      if (el.type === `feature`) {
        setFilterBy({
          ...filterBy,
          features:
            filterBy && filterBy.features.length > 0
              ? [...filterBy.features, el.value]
              : [el.value],
        });
      }
      if (el.type === `category`) {
        setFilterBy({
          ...filterBy,
          categories:
            filterBy && filterBy.categories.length > 0
              ? [...filterBy.categories, el.id]
              : [el.id],
        });
      }
    });
  };

  const handleSortChange = (value: Option) => {
    if (value.value !== `CLOSEST`) {
      setSortBy(value.value);
    } else {
      setFilterBy({
        ...filterBy,
        features:
          filterBy && filterBy.features.length > 0
            ? [...filterBy.features, `CLOSEST`]
            : [`CLOSEST`],
      });
    }
  };

  const handleLoadMoreChange = () => {
    setSize(size + 10);
  };

  return (
    <AppLayout
      title="The Sustainable Network"
      description=""
      className="home-page-wrapper d-flex"
    >
      <HomeFilter
        loading={ptLoading}
        resources={ptData}
        onChange={handleFilterChange}
      />
      <div className="d-flex flex-grow-1 mw-100">
        <HomePlaces
          loading={pLoading}
          resources={pData ? pData.data : []}
          onSortChange={handleSortChange}
          onLoadMore={handleLoadMoreChange}
          filterloading={ptLoading}
          filterResources={ptData}
          filterOnChange={handleFilterChange}
        />
        <HomeMap loading={pLoading} resources={geolocations} />
      </div>
    </AppLayout>
  );
}

export default Home;
