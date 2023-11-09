// src/components/side/SideComponent.js
import React, { useEffect } from 'react';

const SideComponent = () => {
  useEffect(() => {
    // Replace this placeholder with your actual Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.google.com/';
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed (e.g., remove the script when the component unmounts)
      document.head.removeChild(script);
    };
  }, []);

  return (
    <aside>
      {/* Add any other side content here */}
      <div>
        <h2>Related Links</h2>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default SideComponent;
