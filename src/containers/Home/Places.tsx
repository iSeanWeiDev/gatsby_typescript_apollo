/* eslint-disable react/no-array-index-key */
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
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppSkeleton } from '@/components/App';
import { FormDropDown } from '@/components/Form';
import { IPlace } from '@/types/place';
import { useAppPageQuery } from '@/graphql/internal';

type CardSectionProps = {
  loading: boolean;
  resources: IPlace[];
  onSortChange: (value: any) => void;
  onLoadMore: () => void;
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
}: CardSectionProps) {
  const { defaultLogo } = useAppPageQuery();
  const [sort, setSort] = useState<Option>();

  const handleSortChange = (value: Option) => {
    setSort(value);
    onSortChange(value);
  };

  return (
    <div className="home-place-wrapper">
      <p className="main-heading px-4">
        <strong>Sustainable Agriculture near Everywhere</strong>
      </p>
      <div className="place-sort d-flex justify-content-between align-items-center px-4">
        <div className="filters">filters</div>
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
                        <div>{el.contactInfo.phone1 || `No phone number`}</div>
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
  );
}

export default HomePlaces;
