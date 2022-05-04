import React, { useEffect, useContext } from "react";
import Loading from "./Loading";
import { ResultContext } from "../contexts/ContextProvider";
import ReactPlayer from "react-player";

const Videos = () => {
  const { Results, isLoading, getResults, searchTerm } =
    useContext(ResultContext);

  useEffect(() => {
    getResults(`search/q=${searchTerm} videos`);
  }, [searchTerm]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="video-container">
      {Results?.results?.map((video, index) => (
        <div key={index} className="single-video">
          <ReactPlayer
            url={video?.additional_links[0]?.href}
            controls
            width="355px"
            height="auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Videos;
