// import React from 'react';

// function Header() {
//   return (
//     <header>
//       <div className="header-content">
//         <div className='circle'></div>
//         <div className="inner-circle"></div>
//         <h1>MyPersonalWebsite</h1>
//         <div className="header-buttons">
//           <button onClick={() => console.log('Home clicked')}>Home</button>
//           <button onClick={() => console.log('About clicked')}>About</button>
//           <button onClick={() => console.log('Personal Info clicked')}>Personal Info</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React, { useState } from 'react';


// function Header() {
//   const [isAboutOverlayVisible, setIsAboutOverlayVisible] = useState(false);

//   // Function to toggle the About overlay visibility
//   const toggleAboutOverlay = () => {
//     setIsAboutOverlayVisible(prev => !prev);
//   };

//   return (
//     <header>
//       <div className="header-content">
//         <div className='circle'></div>
//         <div className="inner-circle"></div>
//         <h1>MyPersonalWebsite</h1>
//         <div className="header-buttons">
//           {/* Home Button */}
//           <button onClick={() => console.log('Home clicked')}>Home</button>

//           {/* About Button */}
//           <button onClick={toggleAboutOverlay}>About</button>

//           {/* Personal Info Button */}
//           <button onClick={() => console.log('Personal Info clicked')}>Personal Info</button>
//         </div>
//       </div>

//       {/* About Overlay */}
//       {isAboutOverlayVisible && (
//         <div className="overlay">
//           <div className="overlay-content">
//             <h2>About Me:</h2>
//             <p>
//               I'm someone who deeply values dedication and perseverance...
//             </p>
//             <button onClick={toggleAboutOverlay}>Close</button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import another from './another.jpg';


function Header() {
  const [isAboutOverlayVisible, setIsAboutOverlayVisible] = useState(false);
  const [isPersonalInfoOverlayVisible, setIsPersonalInfoOverlayVisible] = useState(false);

  // Function to toggle the About overlay visibility
  const toggleAboutOverlay = () => {
    setIsAboutOverlayVisible(prev => !prev);
    setIsPersonalInfoOverlayVisible(false); // Hide the Personal Info overlay
  };

  // Function to toggle the Personal Info overlay visibility
  const togglePersonalInfoOverlay = () => {
    setIsPersonalInfoOverlayVisible(prev => !prev);
    setIsAboutOverlayVisible(false); // Hide the About overlay
  };

  return (
    <header>
      <div className="header-content">
        <div className='circle'></div>
        <div className="inner-circle"></div>
        <h1>MyPersonalWebsite</h1>
        <div className="header-buttons">
          {/* Home Button */}
          
          {/* About Button */}
          <button onClick={toggleAboutOverlay}>About</button>

          {/* Personal Info Button */}
          <button onClick={togglePersonalInfoOverlay}>Contact</button>
        </div>
      </div>

      {/* About Overlay */}
      {isAboutOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>About Me:</h2>
            <p>
            I'm someone who deeply values dedication and perseverance. Whenever challenges arise, I consistently strive to overcome them effectively. My commitment to continuous growth is evident in my keen interest in self-improvement. Whether it's mastering a new skill or refining an existing one, I've found that personal development bolsters my confidence. Outside of work and personal growth, I have a penchant for sketching subjects that inspire me, immersing myself in diverse music genres, and cherishing moments with my loved ones.


            </p>
            <div className="about-image">
            <img src={another} alt="mypic" />
        </div>

     
            
            <button onClick={toggleAboutOverlay}>Close</button>
          </div>
        </div>
      )}

      {/* Personal Info Overlay */}
      {isPersonalInfoOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Contact</h2>
            <p>Looking forward to hearing from you</p>
            <h3>Phone</h3>
            <p>9344337927</p>
            <h3>Email</h3>
            <p>dicksond765@gmail.com</p>
            <button onClick={togglePersonalInfoOverlay}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

