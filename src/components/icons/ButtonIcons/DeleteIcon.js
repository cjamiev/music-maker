import React from 'react';

export const DeleteIcon = ({ isDisabled }) => {
  return (
    <g aria-label="delete">
      <g transform="matrix(1.154256,0,0,1.154256,-807.26747,-135.47148)">
        <rect
          className={isDisabled ? 'icon--disabled' : 'icon--black'}
          width="40.310783"
          height="6.2348733"
          x="702.61969"
          y="120.59746"
          ry="0.97688466"
          rx="0.97688466"
        />
        <rect
          className={isDisabled ? 'icon--disabled' : 'icon--black'}
          width="28.189356"
          height="31.572081"
          x="708.68042"
          y="128.40009"
        />
        <path
          className={isDisabled ? 'icon--disabled' : 'icon--black'}
          d="m 708.90627,160.06534 4.35995,3.69784 17.9934,0.0913 5.32876,-3.78911 z"
        />
        <rect
          className="icon--white"
          width="1.3389946"
          height="20.437284"
          x="714.3183"
          y="135.27916"
          ry="0"
          rx="0"
        />
        <rect
          className="icon--white"
          width="1.3389946"
          height="20.437284"
          x="722.19373"
          y="135.27916"
          ry="0"
          rx="0"
        />
        <rect
          className="icon--white"
          width="1.3389946"
          height="20.437284"
          x="730.06915"
          y="135.27916"
          ry="0"
          rx="0"
        />
        <rect
          className={isDisabled ? 'icon--disabled' : 'icon--black'}
          width="9.4681206"
          height="3.7872484"
          x="718.04102"
          y="117.55709"
          ry="0.73266387"
          rx="0.73266387"
        />
      </g>
    </g>
  );
};
