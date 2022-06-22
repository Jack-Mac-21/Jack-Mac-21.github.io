const observer = new IntersectionObserver(entries =>{
  console.log(entries.length)
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('intersection found')
      document.querySelector(".animated")[0].classList.add("fadeInRight")
    }
  });

})

observer.observe(document.querySelector('.transition-skills-to-projects'));
