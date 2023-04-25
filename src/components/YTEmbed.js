import React from "react";
import PropTypes from "prop-types";

// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
const YTEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Embed"
    />
  </div>
);

YTEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YTEmbed;
