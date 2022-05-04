import React, { useEffect, useContext } from "react";
import Loading from "./Loading";
import { ResultContext } from "../contexts/ContextProvider";

const Images = () => {
  const { Results, isLoading, getResults, searchTerm } =
    useContext(ResultContext);

  useEffect(() => {
    getResults(`image/q=${searchTerm}`);
  }, [searchTerm]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="image-container">
      {Results?.image_results?.map((image, index) => (
        <div className="image" key={index}>
          <img src={image?.image?.src} alt="" />
          <a href={image?.link?.href} target="_blank" rel="noreferrer">
            {image?.link?.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Images;
