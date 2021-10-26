

$(document).ready(function(){
    $('.mobile__items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-btn slick-next"><img src="icons/next-arrow.png"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"><img src="icons/prev-arrow.png"></button>',
    });
  });
  
  window.addEventListener('DOMContentLoaded', ()=>{
    const catalogBtn = document.querySelector('.navigation__catalog'),
    burgerMenu = document.querySelector('.burger');
    catalogBtn.addEventListener('click',(elem)=>{
      elem.preventDefault;
      burgerMenu.classList.toggle('burger-active');
      const catalogBlock = document.querySelector('.catalog'),
      catalogBlockContainer = document.querySelector('.catalog__container');
      catalogBlockContainer.style.height = 0;
      catalogBlock.classList.toggle('hide');
      if(catalogBlock.classList.contains('hide')){
        document.body.style.overflow = '';
        catalogBlockContainer.style.height = 0;
      }else{
        document.body.style.overflow = 'hidden';
        catalogBlockContainer.style.height = '650px';
      }
      catalogBlock.addEventListener('click',(e)=>{ 
        if(e.target.classList.contains('catalog')){
          catalogBlock.classList.add('hide');
        if(burgerMenu.classList.contains('burger-active')){
          burgerMenu.classList.remove('burger-active');
        }
        }
      });
    });
    

    function hider(elem){
      const hider = elem.querySelectorAll('a'),
      div = document.createElement('div');
      div.innerHTML = '<a href="#">Показать еще</a>';
      div.querySelector('a').style.color = '#76BC21';
      if(hider.length > 5){
        
        let i = hider.length;
        while(i > 5){
          hider[i-1].style.display = 'none';
          i--;
          // console.log('1');
          
        }
        elem.append(div);

        div.addEventListener('click', ()=>{
          if(div.querySelector('a').text === 'Показать еще'){
            let j = hider.length;
            while(j > 5){
             hider[j-1].style.display = 'block';
             j--;  
          } 
          div.querySelector('a').text = 'Скрыть';
        
          }else{
            let k = hider.length;
            while(k > 5){
             hider[k-1].style.display = 'none';
             k--;  
          } 
          div.querySelector('a').text = 'Показать еще';
          }
        });

    }
  }
    
    const navBtn = document.querySelector('.navigation__catalog-btn');
    
    const catalog = document.querySelectorAll('.catalog__link');
    catalog.forEach( (item)=> hider(item));
    
    window.addEventListener('resize', changes);
  function changes(){
    const navLinks = document.querySelector('.navigation__links');
    const formBlock = document.querySelector('.form-block');
    const formBlockForm = document.querySelector('.form-block form');
    const screen = window.innerWidth;
    // console.log(screen);
    if(screen < 1200){
      formBlock.addEventListener('click', function(){
        navLinks.style.display = 'none';
        formBlockForm.style.display = 'block';
        formBlock.style.cssText = `
        display: block;
        position: static;        
        top: auto;
        left: auto;
        margin: 0;
        padding: 25px 0 0 20px;`
        if(formBlock.classList.contains('no-before') == false){
          formBlock.classList.add('no-before')
        }
      })
    }
    }
    // if(!screen.matches){
    //   const search = document.querySelector('.form-block');
    //   // console.log(search);
    //   search.addEventListener('click',()=>{
    //     search.classList.add('no-before');
    //     console.log('1');
        
        
    //   });
      
      // search.addEventListener('click', ()=>{
        // search.classList.add('no-before');
        // if(search.classList.contains('no-before')){
        //   console.log('1');
        // }else{
        //   console.log('2');
          
        // }
      // });
  });