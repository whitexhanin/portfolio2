let Container = document.getElementById('Container');
let menuWrap = document.getElementById('menuWrap');
let Menu = document.getElementById('Menu');
let menuList = document.getElementById('menuList');
let ele = menuList.getElementsByTagName('li');    


//MENU

Menu.addEventListener("mouseover", MarginEvent);
Menu.addEventListener("mouseleave", NoMarginEvent);
Menu.addEventListener("click" ,function(e){
    e.preventDefault();

    let generator = gen();

    if(menuWrap.classList[1] === "open"){
        generator.next();    

    }else if (menuWrap.classList[1] !== "open"){
        setTimeout(function(){
            generator.next();
        },300);
        setTimeout(function(){
            generator.next();
        },700);
        setTimeout(function(){
            generator.next();
        },1000);
        setTimeout(function(){
            generator.next();
        },1300);
        generator.next();
    }  
});

function* gen(){
    yield MeunEvent();    
    yield li1();    
    yield li2();    
    yield li3(); 
    yield li4();      
}

//Container Margin
function MarginEvent() {    
    Container.style.margin = '20px';  
}
function NoMarginEvent() {    
    Container.style.margin = '0px';  
}

//MenuOpen
function MeunEvent(){    
    
    if(menuWrap.classList[1] === "open"){
        menuWrap.classList.remove('open'); 
        liRemove();       

    }else if (menuWrap.classList[1] !== "open"){
        menuWrap.classList.add('open');
    }    
}

//Menu List Event
function li1(){    
    ele[0].classList.add('on')
}
function li2(){
    ele[1].classList.add('on')
}
function li3(){
    ele[2].classList.add('on')
}
function li4(){
    ele[3].classList.add('on')
}
function liRemove(){
    ele[0].classList.remove('on');
    ele[1].classList.remove('on');
    ele[2].classList.remove('on');  
    ele[3].classList.remove('on');  
}

