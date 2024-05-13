 let sections=document.querySelectorAll('section');

 window.onscroll= () => {
   sections.forEach(sec =>{
        let top=window.scrollY ;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;

        if(top >offset && top <offset +height){
            sec.classList.add('show-animation');
        }
        else{
            sec.classList.remove('show-animation');
        }   
   })
 }

 let next=document.querySelector('.next');
 let prev=document.querySelector('.prev');

 next.addEventListener('click',function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
 })
 prev.addEventListener('click',function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length-1])
 })

