import React, { useState ,useEffect} from "react";
import "./PropertyListing.css";

const PropertyDetailPage = () => {
  const [imageSet, setImageSet] = useState(1);

  // cost calculator
  const [cost, setCost] = useState(0);
  /*
  cost = pge+water+garbage+internet+price/rooms
  
  database missing utilites in rental_listing table
  Property has no api call to gather listing info
  and no variable declariations for listing info 
   */

  const percent = 11 * 0.3;

  async function calculator() {
    setCost(percent);
  }

  // Handler for unimplemented features
  const handleAlert = () => {
    alert("You clicked a feature that is not implemented in the backend");
  };



  // Image display logic
  const totalImages = 6; // Update this as per your number of images
  const imagesPerSet = 3; // Number of images per set
  const totalSets = Math.ceil(totalImages / imagesPerSet); // Calculate total sets

  const handlePrevImages = () => {
    setImageSet((prev) => Math.max(prev - 1, 1)); // Decrease imageSet, minimum 1
  };

  const handleNextImages = () => {
    setImageSet((prev) => Math.min(prev + 1, totalSets)); // Increase imageSet, maximum totalSets
  };
const getMapEmbed=(address)=>{
  return `https://www.google.com/maps?q=${address}&output=embed`
}
  return (
    <div className="page-container">
      <div className="image-and-map-container">
        <div className="image-navigation-section">
          {/* Previous Image Set Button */}
          {imageSet > 1 && (
            <button onClick={handlePrevImages} className="nav-button">
              Prev
            </button>
          )}

          {/* Image placeholders */}
          {[...Array(totalImages)].map((_, i) => (
            <div
              key={i}
              className={`image-section${Math.ceil((i + 1) / imagesPerSet) === imageSet ? "" : " hidden"
                }`}
            >
              <div className="address-section" >
                <img
                  src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`} // Replace with actual image paths
                  alt={`Property ${i + 1}`}
                />
              </div>
            </div>
          ))}

          {/* Next Image Set Button */}
          {imageSet < totalSets && (
            <button onClick={handleNextImages} className="nav-button">
              Next
            </button>
          )}
        </div>

        {/* Map placeholder */}
        <div className="map-placeholder"  >
          <iframe src={getMapEmbed("Union Square, San Francisco, CA")} width={300} height={300} >
        </iframe>
        </div>
      </div>

      <div className="details-container">
        <div className="property-details card-box">
          <h3>Address</h3>
          <p>1234 Elm Street, Springfield, IL</p>
        </div>

        {/* Cost calculator */}
        <div className="calculator-container card-box">
          <h1>Cost Calculator</h1>
          <p className="calculator-text">Rent per person = </p>
          <p className="calculator-value">{"$" + Math.round(percent)}</p>
        </div>

        <div className="contact-details card-box">
          <div>Phone Number: XXX-XXX-XXXX</div>
          <button onClick={handleAlert} className="contact-button">
            Request Tour
          </button>
          <button onClick={handleAlert} className="contact-button">
            Bookmark
          </button>
        </div>
      </div>

      <div className='abouts-section'>
        {/* About Property Section */}
        <div className="about-section">
          <h3>About Property</h3>
          <p className="details-text">
            This beautiful 3-bedroom home, located in a prime residential area,
            offers a perfect blend of comfort and convenience. The property
            features hardwood flooring throughout, adding warmth and elegance to
            the space. A modern kitchen equipped with state-of-the-art appliances
            makes it ideal for those who love cooking. The spacious backyard
            serves as a serene retreat for relaxation or a delightful space for
            gatherings. The home's proximity to essential amenities like shopping
            centers, parks, and top-rated schools makes it an excellent choice for
            families. Efficient public transportation, including bus and train
            services, is within walking distance, ensuring easy commuting.
          </p>
          <ul className="details-text">
            <li>Furnished/Unfurnished: Unfurnished</li>
            <li>Pet Policy: No Pets</li>
          </ul>
        </div>

        {/* About Landlord Section */}
        <div className="about-section">
          <h3>About Landlord</h3>
          <p className="details-text">
            John Doe has been a dedicated property owner for over a decade, known
            for his attention to detail and commitment to maintaining high-quality
            living standards. With a background in architecture, John brings a
            unique perspective to property management, ensuring that each home is
            not only aesthetically pleasing but also functional and comfortable.
            An avid community supporter, he actively participates in local events
            and initiatives to improve the neighborhood. His hobbies include
            gardening, which is evident in the well-kept landscapes of his
            properties, biking along the city's scenic routes, and hiking in the
            nearby mountains. John prides himself on being approachable and
            responsive, always available to address tenants' needs and concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
