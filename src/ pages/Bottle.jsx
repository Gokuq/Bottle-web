// import React, { useState, useEffect } from 'react';
// import Shop from './Shop';
// import Home from './Home';

// const Bottle = () => {
//   const [showShop, setShowShop] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = window.scrollY / totalHeight;
//       setScrollProgress(progress);

//       // Show Shop component when scroll progress reaches 75%
//       if (progress >= 0.75) {
//         setShowShop(true);
//       } else {
//         setShowShop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       <Home scrollProgress={scrollProgress} />
//       {showShop && <Shop />}
//     </div>
//   );
// };

// export default Bottle;