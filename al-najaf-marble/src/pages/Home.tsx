import './Home.css';
import marbleImage from '../assets/marble.jpg';
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';

export default function Home() {
  return (
    <>
      {/* Smooth Continuous Project Slider */}
      <div className="slider-wrapper">
        <div className="slider-track">
          <img src={project1} alt="Project 1" className="slider-img" />
          <img src={project2} alt="Project 2" className="slider-img" />
         <img src={project3} alt="Project 3" className="slider-img" />
     
          {/* Repeat for seamless loop */}
          <img src={project1} alt="Project 1" className="slider-img" />
          <img src={project2} alt="Project 2" className="slider-img" />
           <img src={project3} alt="Project 3" className="slider-img" />

        </div>
      </div>

      {/* Blue Jeans Marble Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={marbleImage}
              alt="Blue Jeans Marble"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Blue Jeans Marble</h1>
            <p className="text-muted">
              Al Najaf Marble and Granite is proud to offer the luxurious Blue Jeans Marble. Known
              for its rich blue textures and stunning veining, this natural stone adds elegance and
              sophistication to any space.
            </p>
            <ul className="list-unstyled">
              <li>✅ Premium Finish</li>
              <li>✅ Imported Quality</li>
              <li>✅ Durable and Long-lasting</li>
              <li>✅ Available for Kitchens, Floors & Walls</li>
            </ul>
            <a href="/contact" className="btn btn-primary mt-3">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
