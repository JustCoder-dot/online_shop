
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
    const catalogMain = document.querySelector('.catalog');
    const catalogBtn = document.querySelector('.navigation__catalog'),
    burgerMenu = document.querySelector('.burger'),
    adaptiveBurgerBtn = document.querySelector('.adaptiveburger'),
    adaptiveBurgerMenu = document.querySelector('.adaptiveburger__spans'),
    catalogX = document.querySelector('.catalog__x');
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
          document.body.style.overflow = 'auto';  
        }
        }
      });
    });

    adaptiveBurgerBtn.addEventListener('click',(elem)=>{
      elem.preventDefault;  
      const catalogBlock = document.querySelector('.catalog');
      const fixedMenu = document.querySelector('.fixedmenu');
      if(catalogBlock.classList.contains('hide')){
        catalogBlock.classList.remove('hide');
        // catalogBlock.classList.toggle('adaptivehide');
      }else{
        catalogBlock.classList.toggle('adaptivehide');
      }

      // if(fixedMenu.style.visibility = "visible"){
        fixedMenu.style.display = 'none';
      // }
      

    });
    catalogX.addEventListener('click',(e)=>{
      e.preventDefault;
      const fixedMenu = document.querySelector('.fixedmenu');
      const catalogBlock = document.querySelector('.catalog');
      if(catalogBlock.classList.contains('hide')){
        catalogBlock.classList.remove('hide');
      }else{
        catalogBlock.classList.toggle('adaptivehide');
      }
      fixedMenu.style.display = 'block';
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
  
  // footer 
  function checkAdd(screen){
    const screenSize = window.innerWidth;
    if(screenSize < screen){
      footerLinks.append(footerMenu);
    }
    else if(screenSize > screen){
      footerInner.append(footerMenu);
    }
  }
  const footerLinks = document.querySelector('.footer__links'),
  footerMenu = document.querySelector('.footer__menu'),
  footerInner = document.querySelector('.footer__inner'),
  footerMenuArrow = document.querySelectorAll('.footer__menu-arrow'),
  footerMenuLinks = document.querySelectorAll('.footer__menu-item-links');

  checkAdd(750);
  window.addEventListener('resize', ()=>{
    checkAdd(750);
    const screenSize = innerWidth;
    if(innerWidth> 750){
      const links = document.querySelectorAll('.footer__menu-item-links');
      links.forEach(item =>{
        item.style.height = '100%';
      })
    }
  });
  footerMenuArrow.forEach(item =>{
    item.addEventListener('click', (e)=>{
      const arrowNumber = +e.target.getAttribute('data-arrow');
      const links = document.querySelectorAll('.footer__menu-item-links');
      const linksHeight = window.getComputedStyle(links[arrowNumber-1]).height;
      if(linksHeight == '0px'){
        links[arrowNumber-1].style.height = '100%';
      }
      else{
        links[arrowNumber-1].style.height = '0px';
      }
    });
  });
  function dots (slides, dots, dotsClass, idName){
    const slide = document.querySelectorAll(slides);
    const length = slide.length;
    const dotsblock  = document.querySelector(dots);
    let i = 0;
    while(i < length){
      const dot = document.createElement('div');
      dot.className = dotsClass;
      dot.setAttribute('id', `${idName+i}`);
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
  let removeNumber = 2;
  let returnNumber = 6;
  let moreArray = [];
  function constHeight(elem, height,innerBlockItems, addBlock ){
    const mainBlock = document.querySelector(elem),
    elemHeight = window.getComputedStyle(mainBlock).height,
    add = document.querySelector(addBlock),
    innerItems = document.querySelectorAll(innerBlockItems);
    if(+elemHeight.slice(0, elemHeight.length - 2) > height){
        console.log(1);
        const clientWidth = window.innerWidth;
        moreArray.push(clientWidth);
        const lastElem = {
            last : innerItems[innerItems.length -removeNumber]
          };
          add.append(lastElem.last);
          removeNumber++;
          returnNumber--;
    }
 
  }
 
  dots('.blocks__item', '.blocksdots' ,'dot', 'blocksDotsID');
  dots('.sales__item', '.salesdots', 'salesdot', 'salesDotsID');
  dots('.news__item', '.newsdots', 'newsdot', 'newsdotsID');
  dotsClick('.dot', '.blocks__container', '.blocks__items');
  dotsClick('.salesdot', '.sales__items', '.sales__inner');
  dotsClick('.newsdot', '.news__items', '.news__inner');
 function aasd(){
  const elems = document.querySelectorAll('.selection__item');
  
  let i = 0;
  const innerBlock = document.querySelector('.selection__inner');
  const moreBlock = document.querySelector('.more__sub-block');
  let innerWidth = window.getComputedStyle(document.querySelector('.selection__inner')).width;
  let width = +innerWidth.slice(0,innerWidth.length - 2);
  const moreBtn = document.querySelector('.more')
  let elemWidth = window.getComputedStyle(elems[i]).width;
  let moreBtnNum = window.getComputedStyle(moreBtn).width;
  let sum = +moreBtnNum.slice(0,moreBtnNum.length - 2);
  while(sum + (+elemWidth.slice(0,elemWidth.length -2)) < width && i<elems.length-1){
    sum+= +elemWidth.slice(0,elemWidth.length -2);
    i++;
    if(elems[i].parentNode != 'selection__inner'){
      innerBlock.insertBefore(elems[i], moreBtn);
    }
    elemWidth = window.getComputedStyle(elems[i]).width;
  }
  if(i>=elems.length-1){
    // moreBtn.remove();
    // console.log("1")
    moreBtn.style.display = 'none';
  }else if (i<=elems.length-1 && moreBtn.style.display == 'none' ){
    // createMoreBlock();
    moreBtn.style.display = 'block';
  }
  while(elems.length-1 > i )
  {
    // console.log(elems[i]);    
    moreBlock.prepend(elems[i]);
    i++;
  }
 }
  aasd();
  window.addEventListener('resize', ()=>{
  const screen = window.innerWidth;
  if(screen > 800){
    const salesBlock = document.querySelector('.sales__inner');
    salesBlock.style.transform = 'translateX(0)';
  }
  else if(screen > 550){
    const blocksBlock = document.querySelector('.blocks__items');
    blocksBlock.style.transform = 'translateX(0)';
  }
  else if(screen > 900){
    const newsBlock = document.querySelector('.news__inner');
    newsBlock.style.transform = 'translateX(0)';
  }
   dotsClick('.dot', '.blocks__container', '.blocks__items');
   dotsClick('.salesdot', '.sales__items', '.sales__inner');
   dotsClick('.newsdot', '.news__items', '.news__inner');
   aasd();

 })


  });