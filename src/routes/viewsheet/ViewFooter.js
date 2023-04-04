import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from 'components/pagination';
import Button, { IconButton } from 'components/button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ViewFooter = ({ numberOfPages, onChangePage, onZoomIn, onZoomOut }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="viewsheet-footer">
        <Button
          label="Back to View Page"
          classColor="primary"
          onClick={() => { navigate('/view');}}
        />
        <Pagination
          className="viewsheet-footer__pagination"
          size={numberOfPages}
          onChange={onChangePage}
        />
        <div className="viewsheet-footer__zoom">
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