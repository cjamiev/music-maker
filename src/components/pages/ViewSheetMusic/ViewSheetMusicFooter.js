import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'components/molecules/Pagination';
import { Button, IconButton } from 'components/atoms/Button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ONE = 1;

export const ViewSheetMusicFooter = ({ currentPage, numberOfPages, onChangePage, onZoomIn, onZoomOut }) => {
  const navigate = useNavigate();

  const className = numberOfPages > ONE ? 'viewsheetmusic-footer' : 'viewsheetmusic-footer viewsheetmusic-footer--transparent';

  return (
    <>
      <div className={className}>
        <Button
          label="Back to View Page"
          classColor="primary"
          onClick={() => { navigate('/view');}}
        />
        {numberOfPages > ONE && <Pagination
          className="viewsheetmusic-footer__pagination"
          currentPage={currentPage}
          size={numberOfPages}
          onChange={onChangePage}
        />}
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
