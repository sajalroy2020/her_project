let mobileBtn = document.querySelector('.menu');
let mobileMenu = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close');

mobileBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('-ml-80')
})
closeBtn.addEventListener('click', function(){
    mobileMenu.classList.add('-ml-80')
})

//Back To Top Button Code Start
    let scrollBtn = document. querySelector('.scrollBtn')
    let nav = document.querySelector('.nav')
    window.onscroll = function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.classList.remove('hidden');
            nav.classList.add('bg-gray-300')
          } else {
            scrollBtn.classList.add('hidden')
            nav.classList.remove('bg-gray-300')
          }
    }
    scrollBtn.addEventListener('click',function(e){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
//Back To Top Button Code End