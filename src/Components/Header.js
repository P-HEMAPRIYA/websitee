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
// import another from './another.jpg';


function Header() {
  const [isAboutOverlayVisible, setIsAboutOverlayVisible] = useState(false);
  const [isPersonalInfoOverlayVisible, setIsPersonalInfoOverlayVisible] = useState(false);
  const [isResumeOverlayVisible, setIsResumeOverlayVisible] = useState(false); // State for Resume overlay

  // Function to toggle the About overlay visibility
   const toggleAboutOverlay = () => {
    setIsAboutOverlayVisible(prev => !prev);
    setIsPersonalInfoOverlayVisible(false);
    setIsResumeOverlayVisible(false); // Hide the Resume overlay if it's open
  };

  const togglePersonalInfoOverlay = () => {
    setIsPersonalInfoOverlayVisible(prev => !prev);
    setIsAboutOverlayVisible(false);
    setIsResumeOverlayVisible(false); // Hide the Resume overlay if it's open
  };

  const toggleResumeOverlay = () => {
    setIsResumeOverlayVisible(prev => !prev);
    setIsAboutOverlayVisible(false);
    setIsPersonalInfoOverlayVisible(false); // Hide the Contact overlay if it's open
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
          <button onClick={toggleResumeOverlay}>Resume</button>


          {/* Personal Info Button */}
          <button onClick={togglePersonalInfoOverlay}>Contact</button>
          
        </div>
      </div>

      {/* About Overlay */}
      {isAboutOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">

           
            <p>
            <strong>About:</strong> I'm someone who deeply values dedication and perseverance. Whenever challenges arise, I consistently strive to overcome them effectively. My commitment to continuous growth is evident in my keen interest in self-improvement. Whether it's mastering a new skill or refining an existing one, I've found that personal development bolsters my confidence. Outside of work and personal growth, I have a penchant for sketching subjects that inspire me, immersing myself in diverse music genres, and cherishing moments with my loved ones.</p>
            
        

        
        <p>
        <strong>Inspiration:</strong>  Messi's natural talent and the way he utilizes it on the field are truly awe-inspiring. His God-given abilities combined with hard work make for a remarkable journey. Messi's journey to winning the World Cup is a testament to perseverance and determination. Learning from failures and ultimately achieving such a significant victory is truly inspiring. Messi's loyalty to FC Barcelona for many years showcased a rare commitment in modern football. Loyalty, both on and off the field, is indeed a valuable trait and other athletes serve as a source of inspiration for you.
        </p>

        
        <p>
        <strong>Passion:</strong>I started my football practice when I was studying 1st grade till 6th grade. It went very well. My passion is to become a footballer. I'll go to practice every day, and I love to play football. My biggest inspiration is Lionel Messi. My love for his skills of playing will never end. After some family issues, I left my passion, and I stopped my routine practice too. As of now, I don't have any passion.
        </p>

       
        <p>
        <strong>Hobbies:</strong>"Music" is my partner. I enjoy music, and I listen every single day. Each song becomes a journey, a reflection of my moods. If I am in a good mood, I prefer to listen to some energy rock music that makes me happy, and when I am tired, I listen to calm music. And then "drawing." After completing my college work, I usually spend more time drawing, and what I visualize in my eyes, I wish to sketch in notes, and it gives me more happiness. "Walking" is one of my favorite hobbies. When I am not interested in drawing or music, I'll go for a walk and admire the beauty of nature. It gives me some peaceful moments, and I'll walk until my legs get tired.
        </p>

            {/* <div className="about-image">
            <img src={another} alt="mypic" />

            
        </div> */}

     
            
      <button onClick={toggleAboutOverlay}>Close</button>
          </div>
        </div>
      )}

{isResumeOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Objective:</h2>
            <p>
              As a dedicated and passionate BSc Physics student at Loyola College, Nungambakkam, Chennai, I am seeking opportunities to apply my strong work ethic, communication skills, and time management abilities.
            </p>
            
            <h2>Education:</h2>
            <p>
              Loyola College, Nungambakkam, Chennai<br/>
              BSc in Physics (2 years, expected graduation [Year])
            </p>
            
            <h2>Skills:</h2>
            <p>
              Programming Languages: Java, Python, C++<br/>
              Soft Skills: Communication, Time Management<br/>
              Sports: Cricket, Athletics
            </p>
            
            <button onClick={toggleResumeOverlay}>Close</button>
          </div>
        </div>
      )}


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

