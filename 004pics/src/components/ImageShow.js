function ImageShow({image}) {
    return (
      <div>
        <img src={image.urls.small} alt={ImageShow.alt_description}/>  
      </div>
    );
  }
  
  export default ImageShow;