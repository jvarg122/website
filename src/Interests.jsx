import React, { useState } from 'react';

function Interests() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  return (
    <main>
        
    <section id="interests">
        
      <div className="titles2">
        <h2>Interests</h2>
      </div>
      <div className="interests">
      <p><strong>Algorithms and Data Structures:</strong> I am interested in studying algorithms and data structures, continually refining problem-solving skills for enhanced computational efficiency.</p>
      <p><strong>Operating Systems:</strong>  I've had experience in designing and implementing robust systems, leveraging UNIX programming, memory management, and process synchronization techniques to ensure efficient computing environments.</p>
      <p><strong>AI</strong>: I am interested in AI, learning heuristic search, problem representation, and classical planning. I want to 
further explore constraint satisfaction and logical inference.</p>
</div>
      
    </section>
    </main>
  );
}

export default Interests;
