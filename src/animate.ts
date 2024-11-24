const event = new Event('outer');

function animate(element: HTMLElement): void {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    let x: number = Math.random() * screenWidth;
    let y: number = -50;
    const size: number = Math.random() * 20 + 10;
    const speed: number = Math.random() * 2 + 1;
  
    let angle: number = Math.random() * 360;
    const angleSpeed: number = Math.random() * 0.02 + 0.01;
  
    element.style.left = `${x}px`;
    element.style.fontSize = `${size}px`;
  
    function fall(): void {
      y += speed;
      x += Math.sin(angle) * 2; 
      angle += angleSpeed;
  
      element.style.top = `${y}px`;
      element.style.left = `${x}px`;
  
      if (y < screenHeight + 50) {
        requestAnimationFrame(fall);
      } else {
        y = -50;
        x = Math.random() * screenWidth;
        element.dispatchEvent(event);
      }
    }
  
    fall();
  }

  export default animate;