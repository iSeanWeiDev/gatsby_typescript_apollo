import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Option } from 'react-dropdown';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  FaHammer,
  FaAppleAlt,
  FaHome,
  FaChild,
  FaCertificate,
} from 'react-icons/fa';
import { Offcanvas } from 'react-bootstrap';
import { SiGooglemaps } from 'react-icons/si';
import { ImLeaf } from 'react-icons/im';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppSkeleton } from '@/components/App';
import { FormDropDown } from '@/components/Form';
import { IPlace, IPlaceFilter } from '@/types/place';
import { useAppPageQuery } from '@/graphql/internal';
import { HomeMap, HomeFilter } from '.';

type CardSectionProps = {
  loading: boolean;
  resources: IPlace[];
  onSortChange: (value: any) => void;
  onLoadMore: () => void;
  filterloading: boolean;
  filterResources: any[];
  filterOnChange: (value: IPlaceFilter[]) => void;
};

const optsSort: Option[] = [
  { value: `CLOSEST`, label: `Closest Location` },
  { value: `NEWEST`, label: `Newest Location` },
  { value: `MOST_POPULAR`, label: `Most Popular` },
  { value: `NAME_ASC`, label: `Name A-Z` },
];

function HomePlaces({
  loading,
  resources,
  onSortChange,
  onLoadMore,
  filterloading,
  filterResources,
  filterOnChange,
}: CardSectionProps) {
  const { defaultLogo } = useAppPageQuery();
  const [sort, setSort] = useState<Option>();

  const handleSortChange = (value: Option) => {
    setSort(value);
    onSortChange(value);
  };

  const [mapOpen, setMapOpen] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleClose = () => setShowFilters(false);
  const handleShow = () => setShowFilters(true);

  return (
    <>
      <div className="home-place-wrapper">
        <div className="home-place-web">
          <p className="main-heading px-4 d-flex justify-content-between">
            <strong>Sustainable Agriculture near Everywhere</strong>
            <button
              className="map-button"
              type="button"
              onClick={() => setMapOpen(!mapOpen)}
            >
              <SiGooglemaps />
            </button>
          </p>
          <div className="place-sort d-flex justify-content-between align-items-center p-4">
            <div className="filters">
              <ImLeaf className="me-2" />
              All filters
              <div className="filter-number">3</div>
            </div>
            <div className="dropdown d-flex justify-flex-end align-items-center">
              <span>Sort:</span>
              <FormDropDown
                value={sort}
                className="menus"
                options={optsSort}
                onChange={handleSortChange}
              />
            </div>
          </div>
        </div>

        <div className="home-place-mob">
          <p className="main-heading px-4 d-flex justify-content-between">
            <strong>Sustainable Agriculture near Everywhere</strong>
          </p>
          <div className="place-sort d-flex justify-content-between align-items-center p-4">
            <button className="filters" type="button" onClick={handleShow}>
              <ImLeaf className="me-2" />
              All filters
              <div className="filter-number">3</div>
            </button>
            <button
              type="button"
              className="map-button"
              onClick={() => setMapOpen(!mapOpen)}
            >
              <SiGooglemaps />
            </button>
          </div>
          <div className="dropdown d-flex justify-flex-end align-items-center ps-4 pb-4">
            <span>Sort: {` `}</span>
            <FormDropDown
              value={sort}
              className="menus"
              options={optsSort}
              onChange={handleSortChange}
            />
          </div>
        </div>

        {mapOpen && <HomeMap loading={false} resources={[]} />}

        <div className="place-list px-4">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div className="mb-4" key={index}>
                  <AppSkeleton height={280} width="100%" />
                </div>
              ))
            : resources && (
                <InfiniteScroll
                  dataLength={resources.length}
                  next={onLoadMore}
                  hasMore
                  loader={
                    loading && (
                      <div className="mb-4">
                        <AppSkeleton height={280} />
                      </div>
                    )
                  }
                >
                  {resources.map((el) => (
                    <div
                      className="place-element d-flex align-items-center"
                      key={el.id}
                    >
                      <div className="logo">
                        <GatsbyImage
                          alt="default logo"
                          image={getImage(defaultLogo)}
                        />
                      </div>
                      <div className="content">
                        <div className="d-flex justify-content-between align-items-center top-intro">
                          <Link to="/" className="place-title">
                            {el.name}
                          </Link>
                          <button type="button" className="btn edit-btn">
                            Edit
                          </button>
                        </div>
                        <div className="categories">
                          <FaHammer className="me-1 icon-enviroment icon" />
                          <FaAppleAlt className="icon-agriculture icon" />
                        </div>
                        <div className="description">
                          {el.description.length > 270
                            ? `${el.description.substring(0, 269)}...`
                            : el.description}
                        </div>
                        <div className="categories">
                          {el.canRental && (
                            <div className="item me-2">
                              <FaHome className="icon-others icon me-2" />
                              <span>Rentals</span>
                            </div>
                          )}
                          {el.hasVolunteer && (
                            <div className="item me-2">
                              <FaChild className="icon-others icon me-2" />
                              <span>Volunteers</span>
                            </div>
                          )}
                          {el.canCertificate && (
                            <div className="item me-2">
                              <FaCertificate className="icon-others icon me-2" />
                              <span>Certification</span>
                            </div>
                          )}
                        </div>
                        <div className="d-flex align-items-end flex-column address">
                          <div>
                            {el.contactInfo.phone1 || `No phone number`}
                          </div>
                          <div>
                            {el.locationInfo.city}, {el.locationInfo.state},
                            {el.locationInfo.country}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteScroll>
              )}
        </div>
      </div>
      <Offcanvas show={showFilters} onHide={handleClose}>
        <Offcanvas.Body>
          <HomeFilter
            loading={filterloading}
            resources={filterResources}
            onChange={filterOnChange}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HomePlaces;
