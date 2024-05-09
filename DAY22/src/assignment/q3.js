import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';

const ImageGallery = () => {
  

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        <img src={image1} alt="image1" style={{ width: '200px', height: '200px', margin: '10px' }} />
        <img src={image2} alt="image2" style={{ width: '200px', height: '200px', margin: '10px' }} />
        <img src={image3} alt="image3" style={{ width: '200px', height: '200px', margin: '10px' }} />
        <img src={image4} alt="image4" style={{ width: '200px', height: '200px', margin: '10px' }} />
      </div>
    </div>
  );
};

export default ImageGallery;
