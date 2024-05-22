const section=document.querySelectorAll('section');

window.onscroll= () =>{
   section.forEach(sec=>{

  let top=window.scrollY;
  let height=sec.offsetHeight -150;
  let offset=sec.offsetTop;

  if(top>= offset && top < offset +height){
     sec.classList.add('show-animate');
  }
  else{
    sec.classList.remove('show-animate');
  }

   })
}

















