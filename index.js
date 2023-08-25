var typed = new Typed("#element", {
    strings: ["AFFORDABLE", "PRACTICAL", "EASY", "INTERACTIVE", "RELEVANT", "CONVENIENT"],
    typeSpeed: 100,
    backspace: 100,
    loop: true,
  });

  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header nav a')

  window.onscroll = () =>{
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150; 
      let height = sec.offsetHeight;
      let id = sec.getAttribute('class')
      
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');

          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  }

