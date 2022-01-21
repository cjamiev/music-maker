import React from 'react';
import Pagination from 'components/pagination';
import Button, { IconButton } from 'components/button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ViewFooter = ({ numberOfPages, onBackToSelection, onChangePage, onZoomIn, onZoomOut }) => {
  return (
    <>
      <div className="viewFooter">
        <Button
          label="Back to Selection"
          classColor="primary"
          onClick={onBackToSelection}
        />
        <Pagination
          className="viewFooter__pagination"
          size={numberOfPages}
          onChange={onChangePage}
        />
        <div className="viewFooter__zoom">
          <IconButton
            type={ICON_TYPES.PLUS}
            size={ICON_SIZES.EXTRA_SMALL}
            onClick={onZoomIn}
          />
          <IconButton
            type={ICON_TYPES.MINUS}
            size={ICON_SIZES.EXTRA_SMALL}
            onClick={onZoomOut}
          />
        </div>
      </div>
    </>
  );
};

export default ViewFooter;