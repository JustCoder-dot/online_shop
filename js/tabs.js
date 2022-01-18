
//  secondpage 
window.addEventListener('DOMContentLoaded',()=>{
  function slider(){
    const slides = document.querySelectorAll('.slider__item'),
    wrapper = document.querySelector('.slider__wrapper'),
    slidesField = document.querySelector('.slider__items'),
    slider =document.querySelector('.slider'),
    width  = window.getComputedStyle(wrapper).width,
    plus = document.querySelector('.slider__wrapper-right'),
    minus = document.querySelector('.slider__wrapper-left'),
    images = document.querySelectorAll('.slider__item img');
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.transition = '0.5s all';
    let offset = 0;
    let slideIndex = 0 ;


    // alert(+width.slice(0, width.length-2))
    slides.forEach((item) =>{
        item.style.width = width;
    });

    plus.addEventListener('click',(e)=>{
        if(offset == +width.slice(0, width.length -2) * (slides.length - 1)){
            offset = 0;
        }else{
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length-1){
            slideIndex = 0;
        }else{
            slideIndex +=1;
        }

        // let findActiveClass = document.querySelector('.active');
        // findActiveClass.classList.remove('active');
        // var style = window.getComputedStyle(slidesField);
        // var matrix = new WebKitCSSMatrix(style.transform);  
        
        // dotsBtn[matrix.m41 / (+width.slice(0, width.length - 2))].classList.add('active');

        // console.log(e.target);
    });
    minus.addEventListener('click', (e)=>{
        if(offset == 0){
            offset = +width.slice(0, width.length -2) * (slides.length - 1);
        }else{
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 0){
            slideIndex = slides.length-1;
        }else{
            slideIndex -=1;
        }
        // console.log(e.target);
    });

    // slider dots    
    let srcs = [];
    images.forEach(item =>{
        const src = item.getAttribute('src');
        srcs.push(src);
    });
    // let dotsInner = document.createElement('div');
    let dotsInner = document.createElement('div');
    let dotsWrapper = document.createElement('div');
    
    dotsInner.className = 'dotsInner';
    dotsInner.style.width = width;
    dotsInner.style.height = '90px';
    dotsInner.style.position = 'relative';
    dotsWrapper.className = 'dotsWrapper';
    dotsWrapper.style.width = width
    dotsWrapper.style.height = '90px';
    dotsWrapper.style.overflow = 'hidden';
    dotsWrapper.style.marginTop = '0';


    let buttons= document.createElement('div');
    buttons.className = 'dotsButtons';

    buttons.style.width = 25 * slides.length + '%';
    buttons.style.height = '100%';
    buttons.style.display = 'flex';
    buttons.style.justifyContent = 'space-between';
    buttons.style.transition = '0.5s all';

    let leftArrow = document.createElement('img');
    leftArrow.className = 'dotsLeftArrow';
    leftArrow.src = 'img/slider/leftArrow.png';
    leftArrow.style.cssText = `
    display:block;
    width: 30px;
    height:30px;
    position:absolute;
    left:-30px;
    top:50%;
    transform:translateY(-50%);
    z-index:99`;
    // console.log(leftArrow);


    let rightArrow = document.createElement('img');
    rightArrow.className = 'dotsRightArrow';
    rightArrow.src = 'img/slider/rightArrow.png';
    rightArrow.style.cssText = `
    display:block;
    width: 30px;
    height:30px;
    position:absolute;
    right:-30px;
    top:50%;
    transform:translateY(-50%);
    z-index:99`;
    // console.log(rightArrow)
    dotsInner.append(leftArrow);
    dotsInner.append(rightArrow);

    for(i=0 ; i<slides.length; i++){
        const button = document.createElement('div'),
        buttonImg = document.createElement('img');
        
        button.className = 'dotsButton';
        buttonImg.className = 'dotsImg';
        button.setAttribute = ('data-badges', '4');
        button.style.padding = '0';
        buttonImg.src =`${srcs[i]}`;
        buttonImg.style.width = '40';
        buttonImg.style.height = '80%';
        button.style.minWidth = `${((+width.slice(0, width.length-2)) * 0.25)-2}px`;
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        button.style.alignItems = 'center';
        button.style.height = '90%';
        button.append(buttonImg);
        button.style.backgroundColor = 'transparent';
        button.style.border = 'none';
        // button.style.backgroundImage = srcs[i];
        buttons.append(button); 
        // console.log(button.getAttribute('data-badges'));
    }
    dotsWrapper.append(buttons);
    dotsInner.append(dotsWrapper)
    slider.append(dotsInner);

    let position = 0;
    const dotsBtn = document.querySelectorAll('.dotsButton'),
    dotsWrp = document.querySelector('.dotsWrapper'),
    dotsBtns = document.querySelector('.dotsButtons'),
    dotsLeftArrow = document.querySelector('.dotsLeftArrow'),
    dotsRightArrow  = document.querySelector('.dotsRightArrow');

    dotsRightArrow.addEventListener('click', ()=>{
        if(position == +width.slice(0, width.length -2) * (slides.length - 4) * 0.25){
            position = 0;
        }else{  
            position += +width.slice(0, width.length - 2) * 0.25;
        }
        dotsBtns.style.transform = `translateX(-${position}px)`; 
     
    });
    
    dotsLeftArrow.addEventListener('click', ()=>{
        if(position == 0){
            position = +width.slice(0, width.length -2) * (slides.length - 4) * 0.25;
        }else{
            position -= +width.slice(0, width.length - 2) * 0.25;
        }
        dotsBtns.style.transform = `translateX(-${position}px)`;     
    });
    dotsBtn[0].classList.add('active');
    dotsBtn.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            slidesField.style.transform = `translateX(-${+width.slice(0, width.length - 2) * i}px)`;  
            const findActive = document.querySelector('.active');
            findActive.classList.remove('active');
            dotsBtn[i].classList.add('active');
        });
    });
}
slider();
window.addEventListener('resize', slider);
// secondpage__tabs  
function removeActive(){
    tabsHeadItems.forEach(item =>{
      if(item.classList.contains('tabs__active')){
        item.classList.remove('tabs__active');
      }
      tabsContentItem.forEach(item =>{
      if(item.classList.contains('tabscontent__active')){
        item.classList.remove('tabscontent__active');
      }
    }) 
    })
  }
  const tabsHeadItems = document.querySelectorAll('.tabs__head-item'),
  tabsContentItem = document.querySelectorAll('.tabs__content-item'),
  tabsContent = document.querySelector('.tabs__content');
  tabsHeadItems[0].classList.add('tabs__active');
  tabsContentItem[0].classList.add('tabscontent__active');
  tabsHeadItems.forEach(item =>{
    item.addEventListener('click',(e)=>{
      const target =e.target;
      const attribute = target.getAttribute('data-tabs');
      removeActive();
      target.classList.add('tabs__active');
    
      tabsContentItem.forEach(elem =>{
       if(attribute == elem.getAttribute('data-tabs')){
        elem.classList.add('tabscontent__active');
       }
     });
    }) 
  });

  // property 
  function hideActive(elem,className){
    elem.forEach(item =>{
      // if(item.classList.contains(className)){
        item.classList.remove(className);
      // }
    })
  } 
  const selectColor  = document.querySelectorAll('.property__select-color-item');
  selectColor[0].classList.add('selectColorActive')
  selectColor.forEach(item =>{
    item.addEventListener('click', (e)=>{
      hideActive(selectColor, 'selectColorActive');
      e.target.classList.add('selectColorActive');
    })
  })
  const selectMemory = document.querySelectorAll('.property__select-memory-item');
  selectMemory[0].classList.add('selectColorActive');
  selectMemory.forEach(item =>{
    item.addEventListener('click', (e)=>{
      hideActive(selectMemory , 'selectColorActive');
      e.target.classList.add('selectColorActive');
    })
  });

  const infoMore = document.querySelector('.property__info-more');
  infoMore.addEventListener('click', (e)=>{
    removeActive();
    const specifications = document.querySelector('.specifications');
    const specTab = document.querySelector('.spec'); 
    specifications.classList.add('tabscontent__active');
    specTab.classList.add('tabs__active');
    const goto = specTab.getBoundingClientRect().top+ pageYOffset;
    window.scrollTo({
      top: goto,
      behavior: 'smooth'
    })
  })
  
  const descrMore = document.querySelector('.property__descr-more'),
  textContent = document.querySelector('.property__descr-text-content');
  console.log(window.getComputedStyle(textContent).height)
  descrMore.addEventListener('click', (e)=>{
    if(window.getComputedStyle(textContent).height == '30px'){
      textContent.style.transition = '0.4s all';
      textContent.style.height = 'auto';
      textContent.style.overflow = 'visible';
      e.target.innerHTML = 'Свернуть';

    }
    else{
      textContent.style.transition = '0.4s all';
      textContent.style.overflow = 'hidden';
      textContent.style.height = '30px';
      e.target.innerHTML =  'Показать полностью';
    }
  });

  // review 
  const review = document.querySelector('.review__makereview'),
  reviewSend  =document.querySelector('.review__send');
  
  review.addEventListener('click', (e)=>{
    e.target.classList.remove('showFlex');
    e.target.classList.add('hide');
    reviewSend.style.display = 'block';
    reviewCancel = document.querySelector('.review__send-cancel');
    console.log(reviewSend.style.display)
    reviewCancel.addEventListener('click', (e)=>{
      console.log(1)
      if(reviewSend.style.display = 'block'){
        reviewSend.style.display = 'none';
        review.classList.remove('hide');
        review.classList.add('showFlex');
      }
    })
  })
  const calcInbasket = document.querySelector('.calc__calc-inbasket'),
  calcCounter = document.querySelector('.calc__calc-counter');
  calcInbasket.addEventListener('click',(e)=>{
    e.target.classList.remove('showFlex');
    e.target.classList.add('hide');
    calcCounter.classList.remove('hide');
    calcCounter.classList.add('show');
  });
  // calc 
  const calcPlus = document.querySelector('.calc__calc-counter-plus'),
  calcMinus = document.querySelector('.calc__calc-counter-minus'),
  counterNumber = document.querySelector('.calc__calc-counter-number span');

  calcPlus.addEventListener('click', ()=>{
    counterNumber.innerHTML = +counterNumber.innerHTML + 1; 
  });
  calcMinus.addEventListener('click', ()=>{    
    if(+counterNumber.innerHTML > 0){
      counterNumber.innerHTML = +counterNumber.innerHTML - 1;
      if(+counterNumber.innerHTML == 0){

        calcCounter.classList.remove('show');
        calcCounter.classList.add('hide');
        calcInbasket.classList.remove('hide');
        calcInbasket.classList.add('showFlex');
        counterNumber.innerHTML = 1 ;
      }
    }

  });
  // stars 

  const reviewStar = document.querySelectorAll('.review__send-star'),
  reviewStars = document.querySelector('.review__send-stars');
  reviewStar.forEach((item,i) =>{
    item.setAttribute('data-star', i+1 );
  });
  // reviewStar.forEach((item,i)=>{

  // });
  reviewStars.addEventListener('mouseover',(e)=>{
    console.log(1);
    if(e.target.getAttribute('data-star')){
      reviewStar.forEach(item =>{
        item.style.color = '#999';
      });
      let number = +e.target.getAttribute('data-star');
      for(let j=1 ; j <= number; j++){
        reviewStar[j-1].style.color = '#333';
      }
    }
    }
  );
  // reviewStar.forEach(item =>{
  //   item.forEach()
  // })
  reviewStars.addEventListener('mouseleave',(e)=>{
    reviewStar.forEach(item =>{
        item.style.color = '#999';
    });
  })
  // reviewStars.addEventListener('mouseout',(e)=>{
  //   reviewStar.forEach(item =>{
  //     item.style.color = "#999";
  //   });
  // });
  // reviewStar.forEach((item,i)=>{
  //   item.addEventListener('mouseover',(e)=>{
  //     let number = +e.target.getAttribute('data-star');
  //     for(let j = 1; i=number;i++){
  //       item.style.backgrounColor = '#333';
  //     }
  //   });
  // });
});