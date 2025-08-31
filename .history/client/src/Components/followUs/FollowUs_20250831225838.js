import React from "react";
import "./FollowUs.css";
function FollowUs() {
  return (
    <div>
      <div className="follow-insta">
        <span className="insta-follow">Follow us </span>
        <p className="insta-p">
          Follow Us on <span className="insta-span"> Instagram</span>
        </p>

        <div className="image-grid">
          <div className="image2-item">
            <div className="image-item">
              <img
                src="/images/istockphoto-1270914034-612x612.jpg"
                alt="Image 1"
              />
            </div>
            <div className="image-item">
              <img
                src="/images//vecteezy_woman-holding-flower-bouquet_26992162.jpg"
                alt="Image 2"
              />
            </div>
          </div>
          <div className="image-item-single">
            <img
              src="/images/pexels-roman-odintsov-6022828.jpg"
              alt="Image 3"
            />
          </div>
          <div className="image2-item">
            <div className="image-item">
              <img
                src="/images/pexels-roman-odintsov-6022838.jpg"
                alt="Image 4"
              />
            </div>
            <div className="image-item">
              <img
                src=""
                alt="Image 5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FollowUs;
