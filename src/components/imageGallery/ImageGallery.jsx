// const response = await fetch(`${import.meta.env.VITE_UNSPLASH_URI}`)
import React, { useState, useEffect } from 'react';



const ImageGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos?page=1&client_id=fLVb_eQ-2EWBRqyMDs6ZmGRWNk2WzZKkj9ubanYSMmk`);
        const data = await response.json();
        setImageGallery(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="image-gallery">
      {imageGallery.map((image, index) => (
        <img 
          key={index} 
          src={image.urls.small} 
          alt={image.description || 'Unsplash Image'} 
        /> 
      ))}
    </div>
  );
}











export default ImageGallery;