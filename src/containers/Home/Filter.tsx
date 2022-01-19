/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ImLeaf } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { FormCheckbox } from '@/components/Form';
import { AppSkeleton, AppDialog } from '@/components/App';
import { IPlaceFilter } from '@/types/place';

type HomeFilterProps = {
  loading: boolean;
  resources: any[];
  onChange: (value: IPlaceFilter[]) => void;
};

const features: IPlaceFilter[] = [
  {
    id: 0,
    name: `Offers Certificate`,
    type: `feature`,
    value: `OFFER_CERTIFICATE`,
  },
  { id: 1, name: `Offers Rental`, type: `feature`, value: `OFFER_RENTAL` },
  { id: 2, name: `Volunteers`, type: `feature`, value: `VOLUNTEER` },
];

function HomeFilter({ loading, resources, onChange }: HomeFilterProps) {
  const [filters, setFilters] = useState<IPlaceFilter[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>();
  const [moreFilters, setMoreFilters] = useState<IPlaceFilter[]>([]);

  const handleChecked = (key: string, value: boolean) => {
    const splitedKeys = key.split(`-`);
    if (value) {
      const tmpObj =
        splitedKeys[0] === `category`
          ? resources.find((el) => String(el.id) === splitedKeys[1])
          : features.find((el) => String(el.id) === splitedKeys[1]);

      setFilters([
        ...filters,
        {
          id: tmpObj?.id,
          name: tmpObj?.name,
          type: splitedKeys[0],
          value: tmpObj.value,
        },
      ]);
      onChange([
        ...filters,
        {
          id: tmpObj?.id,
          name: tmpObj?.name,
          type: splitedKeys[0],
          value: tmpObj.value,
        },
      ]);
    } else {
      const idx = filters.findIndex(
        (el) => el.type === splitedKeys[0] && String(el.id) === splitedKeys[1],
      );
      if (idx > -1) {
        const tmpFilters = filters.filter((_, index) => index !== idx);
        setFilters(tmpFilters);
        onChange(tmpFilters);
      }
    }
  };

  const handleRemoveFilter = (value: IPlaceFilter) => {
    const idx = filters.findIndex(
      (el) => el.type === value.type && el.id === value.id,
    );
    if (idx > -1) {
      const tmpFilters = filters.filter((_, index) => index !== idx);
      setFilters(tmpFilters);
      onChange(tmpFilters);
    }
  };

  const handleMoreFilterChecked = (key: number, value: boolean) => {
    if (value) {
      const tmpObj = resources.find((el) => el.id === key);
      setMoreFilters([
        ...moreFilters,
        {
          id: tmpObj?.id,
          name: tmpObj?.name,
          type: `category`,
        },
      ]);
    } else {
      const tmpFilters = moreFilters.filter((el) => el.id !== key);
      setMoreFilters(tmpFilters);
    }
  };

  const handleDialogSubmit = () => {
    onChange([...filters, ...moreFilters]);
    setOpenDialog(false);
  };

  return (
    <div className="home-filters">
      <div className="selected-filters">
        <div className="title d-flex align-items-center">
          <ImLeaf className="me-2 leaf-icon" />
          <span className="filter-text">
            {filters.concat(moreFilters).length > 0
              ? `${filters.concat(moreFilters).length} Filter${
                  filters.concat(moreFilters).length > 1 ? `s` : ``
                }`
              : `No Filters`}
          </span>
        </div>
        {filters.length > 0 && (
          <span className="clear-all" onClick={() => setFilters([])}>
            Clear All filters
          </span>
        )}
        <div className="tag-list">
          {filters.length > 0 &&
            filters.map((item) => (
              <div className="tags" key={`${item.type}-${item.id}`}>
                <span>
                  {item.name.length > 17
                    ? `${item.name.substring(0, 16)}...`
                    : item.name}
                </span>
                <IoIosClose
                  className="fs-4 close-icon"
                  onClick={() => handleRemoveFilter(item)}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="filter-area">
        <p className="title title-main">Features</p>
        {features.map((feature) => (
          <div key={feature.id} className="filter-item">
            <FormCheckbox
              label={feature.name}
              value={
                filters.findIndex(
                  (filter) =>
                    filter.type === `feature` && filter.id === feature.id,
                ) > -1
              }
              onChecked={(value: boolean) =>
                handleChecked(`feature-${feature.id}`, value)
              }
            />
          </div>
        ))}
      </div>

      <div className="filter-area">
        <p className="title">Category</p>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div className="mb-2" key={index}>
                <AppSkeleton height={30} width="100%" />
              </div>
            ))
          : resources &&
            resources.slice(0, 3).map((el) => (
              <div key={el.id} className="filter-item">
                <FormCheckbox
                  label={
                    el.name.length > 17
                      ? `${el.name.substring(0, 16)}...`
                      : el.name
                  }
                  value={
                    filters.findIndex(
                      (filter) =>
                        filter.type === `category` && filter.id === el.id,
                    ) > -1
                  }
                  onChecked={(value: boolean) =>
                    handleChecked(`category-${el.id}`, value)
                  }
                />
              </div>
            ))}

        <span className="view-all" onClick={() => setOpenDialog(true)}>
          View all
        </span>
      </div>
      <AppDialog
        applyTitle="Apply Filters"
        headerTitle="More Categories"
        open={openDialog}
        onSubmit={handleDialogSubmit}
        onClose={() => setOpenDialog(false)}
      >
        <div className="row">
          {openDialog &&
            resources &&
            resources.map((el) => (
              <div key={el.id} className="col-6 filter-item mb-2">
                <FormCheckbox
                  label={el.name}
                  value={
                    moreFilters.findIndex(
                      (filter) =>
                        filter.type === `category` && filter.id === el.id,
                    ) > -1
                  }
                  onChecked={(value: boolean) =>
                    handleMoreFilterChecked(el.id, value)
                  }
                />
              </div>
            ))}
        </div>
      </AppDialog>
    </div>
  );
}

export default HomeFilter;
