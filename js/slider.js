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