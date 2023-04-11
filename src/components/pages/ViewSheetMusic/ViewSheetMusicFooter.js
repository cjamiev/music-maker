import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'components/molecules/Pagination';
import { Button, IconButton } from 'components/atoms/Button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

export const ViewSheetMusicFooter = ({ currentPage, numberOfPages, onChangePage, onZoomIn, onZoomOut }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="viewsheetmusic-footer">
        <Button
          label="Back to View Page"
          classColor="primary"
          onClick={() => { navigate('/view');}}
        />
        <Pagination
          className="viewsheetmusic-footer__pagination"
          currentPage={currentPage}
          size={numberOfPages}
          onChange={onChangePage}
        />
        <div className="viewsheetmusic-footer__zoom">
          <IconButton
            type={ICON_TYPES.PLUS}
            size={ICON_SIZES.EXTRA_SMALL}
            handleClick={onZoomIn}
          />
          <IconButton
            type={ICON_TYPES.MINUS}
            size={ICON_SIZES.EXTRA_SMALL}
            handleClick={onZoomOut}
          />
        </div>
      </div>
    </>
  );
};
