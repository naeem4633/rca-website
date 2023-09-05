import React, { useEffect } from 'react';

function ScrollToSection({ sectionId }) {
  const scrollTo = () => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const link = document.querySelector(`a[href="#${sectionId}"]`);
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo();
      });
    }
  }, [sectionId]);

  return null;
}

export default ScrollToSection;