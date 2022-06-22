const observer = new IntersectionObserver(entries =>{
  console.log(entries.length)
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('intersection found')
      img_element = document.getElementById('image-to-appear')
      img_element.classList.add("fadeInLeft")
      img_element.style.opacity = 1
      img_element = document.getElementById('p-to-appear')
      img_element.classList.add("fadeInRight")
      img_element.style.opacity = 1
    }
  });

})

observer.observe(document.querySelector(".projects-transition"));
