// src/components/UsageCategories.js
import React,{useState,useEffect} from 'react';

function UsageCategories() {
  return (
    <section className="usage-categories" id="categories">
      <h2>Where to Use</h2>
      <div className="categories">
        <div className="category">
          <h3>Home Decor</h3>
          <p>Add a cozy ambiance to your living room or bedroom.</p>
        </div>
        <div className="category">
          <h3>Office Spaces</h3>
          <p>Brighten up your work environment with natural elements.</p>
        </div>
        <div className="category">
          <h3>Outdoor Patios</h3>
          <p>Create a relaxing outdoor atmosphere for gatherings.</p>
        </div>
      </div>
    </section>
  );
}

export default UsageCategories;
