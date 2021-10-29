
    $(document).ready(function(){
      $('.mobile__items').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          swipeToSlide: true,
          nextArrow:'<button type="button" class="slick-btn icon-arrow-right slick-next"></button>',
          prevArrow:'<button type="button" class="slick-btn icon-arrow-left slick-prev"></button>',
          responsive: [
            {
              breakpoint: 1500,
              settings: {
                swipeToSlide: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                swipeToSlide: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                swipeToSlide: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
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
    const catalog = document.querySelectorAll('.catalog__link');
    catalog.forEach( (item)=> hider(item));
  
  
  // dots 
  dots('.blocks__item', '.blocksdots')
  function dots (slides, dots){
    const slide = document.querySelectorAll(slides);
    const length = slide.length;
    const dotsblock  = document.querySelector(dots);
    let i = 0;
    while(i < length){
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.setAttribute('id', `blocksDotsId${i}`);
      dot.style.cssText = `
      width : 15px;
      height: 15px;
      background-color: #333;
      border-radius: 50%;
      margin: 0 5px;
      `;
      i++;
      
      dotsblock.append(dot);
    }
  }
  dotsClick('.dot', '.blocks__container', '.blocks__items');
  function dotsClick(dotClass, container, inner){
    const dots = document.querySelectorAll(dotClass);
    const blockContainer = document.querySelector(container);
    const width = window.getComputedStyle(blockContainer).width;
    const innerBlock = document.querySelector(inner);

    dots.forEach(item =>{
      item.addEventListener('click', (e)=>{
        const target = e.target;
        let number = +target.id.slice(target.id.length-1 ,target.id.length);
        // console.log(e.target.id.slice(e.target.id.length-1 , e.target.id.length));
        console.log(number);
        console.log(+width.slice(0, width.length -2));
        console.log(`-${number * (+width.slice(0, width.length -2))}px)`);
        
        innerBlock.style.transform = `translateX(-${number * (+width.slice(0, width.length -2))}px)`;
        

        
      });
    });
  }
  });