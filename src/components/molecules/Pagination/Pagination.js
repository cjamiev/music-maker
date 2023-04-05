import React, { useState } from 'react';
import { Button } from 'components/atoms/Button';

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;

export const Pagination = ({ size, onChange, className = '' }) => {
  const [pageNumber, setPageNumber] = useState(ZERO);

  const prevBtn = () => {
    const isEnabled = pageNumber > ZERO;

    return (
      <Button
        key="prev"
        className="pagination__btn-numbers"
        disabled={!isEnabled}
        onClick={() => {
          setPageNumber(pageNumber - ONE);
          onChange(pageNumber - ONE);
        }}
        label="Prev"
      />
    );
  };

  const renderPreviousPageBtns = Array.from({ length: THREE })
    .map((_, index) => {
      return pageNumber - index;
    })
    .reverse()
    .filter((item) => item > ZERO)
    .map((num) => {
      return (
        <Button
          key={num}
          className="pagination__btn-numbers"
          onClick={() => {
            setPageNumber(num - ONE);
            onChange(num - ONE);
          }}
          label={num}
        />

      );
    });

  const currentBtn = () => {
    return (
      <Button
        key="current"
        className="pagination__btn-numbers"
        disabled
        label={pageNumber + ONE}
      />
    );
  };

  const renderNextPageBtns = Array.from({ length: THREE })
    .map((_, index) => {
      return pageNumber + index + TWO;
    })
    .filter((item) => item <= size)
    .map((num) => {
      return (
        <Button
          key={num}
          className="pagination__btn-numbers"
          onClick={() => {
            setPageNumber(num - ONE);
            onChange(num - ONE);
          }}
          label={num}
        />
      );
    });

  const nextBtn = () => {
    const isEnabled = pageNumber + ONE < size;

    return (
      <Button
        key="next"
        className="pagination__btn-numbers"
        disabled={!isEnabled}
        onClick={() => {
          setPageNumber(pageNumber + ONE);
          onChange(pageNumber + ONE);
        }}
        label="Next"
      />
    );
  };

  return (
    <div className={`pagination ${className}`}>
      {[prevBtn(), renderPreviousPageBtns, currentBtn(), renderNextPageBtns, nextBtn()]}
    </div>
  );
};
