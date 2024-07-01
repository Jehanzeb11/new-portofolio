import React, { useEffect } from 'react';

const CursorMove = () => {
  useEffect(() => {
    const cursor:any = document.querySelector('#cursor');
    let mouse = { x: 300, y: 300 };
    let pos = { x: 0, y: 0 };
    const speed = 0.1; // between 0 and 1

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    const updateCoordinates = (e:any) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    const loop = () => {
      updatePosition();
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
    };
  }, []);

  return (
    <>
      <div id="cursor">
        <div className="cursor--inner"></div>
      </div>
    </>
  );
};

export default CursorMove