// rfce

import React from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
      <img
          className="footer__albumLogo"
          src="https://img.discogs.com/91lArFsvGVEe8WhgGMoA0Du4FdU=/fit-in/600x611/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-243887-1496934145-9698.jpeg.jpg"
          alt=""
        />

        {/* {item ? (
          <div className="footer__songInfo">
            <h4>Item name</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : ( */}
          <div className="footer__songInfo">
            <h4>Usher</h4>
            <p>Yeah</p>
          </div>
        {/* )} */}
      </div>

      <div className="footer__center">
      <ShuffleIcon className='footer__green'/>
      <SkipNextIcon className='footer__icon'/>
      <PlayCircleOutlineIcon fontSize="large" className='footer__icon'/>
      <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />

      </div>

      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
