import React from 'react';
import './home.css';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import Navbar from './Navbar'; // Import the Navbar component

export default function Home() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);



  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      <div className="wrapper" >
        <div className="container my-5" style={contentStyle}>
          <div className="row">
            {featuredProducts.map((product) => (
              <div className="col-md-4 mb-3" key={product.id}>
                <div className="card">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
