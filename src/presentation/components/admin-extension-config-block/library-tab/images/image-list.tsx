import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

const ImageList = () => {
  return <PhotoAlbum photos={photos} layout="masonry" />;
};

export default ImageList;
