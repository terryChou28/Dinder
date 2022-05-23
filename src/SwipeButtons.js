import React from 'react';

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
        <IconButton>
            <ReplayIcon fontSize="large" />
        </IconButton>
        <CloseIcon fontSize="large" />
        <StarRateIcon fontSize="large" />
        <FavoriteIcon fontSize="large" />
        <FlashOnIcon fontSize="large" />
    </div>
  );
};

export default SwipeButtons
