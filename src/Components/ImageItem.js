function ImageItem({image}) {
    console.log(image);
    return ( 
        <div> 
            <img className="image-item-img" src={image.cover_photo.urls.small} alt={image.cover_photo.alt_description}/>
        </div>
     );
}
export default ImageItem;