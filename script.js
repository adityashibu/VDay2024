onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      document.querySelector('.glowingText').classList.add('typing-animation');
      clearTimeout(c);
    }, 1000);
  };

window.addEventListener('load', (event) => {
    document.body.classList.remove("not-loaded");
    document.querySelector('.glowingText').style.opacity = '1';

    document.querySelector('.glowingText').classList.add('typing-animation');
});