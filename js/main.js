let nowPage = document.getElementById('nowPage');
let btn_Wrap = document.getElementById('btn_Wrap');


//main text 중앙정렬
for(let i= 0; i < 5; i++ ){
    let textwrap = document.getElementsByClassName('text_wrap')[i];
    let textWidth = textwrap.offsetWidth;
    let textHeight = textwrap.offsetHeight;
    let textWidthhalf = textWidth/2;
    let textHeighthalf = textHeight/2;
    textwrap.style.transform = "translate(-"+textWidthhalf+"px ,-"+textHeighthalf+"px)";
}

//SCROLL EVENT
let num = 1;
let section;
let section1 = document.getElementById('page_1');
let prev;
    section1.style.height = '100vh';


let timeout;

window.addEventListener("wheel", event => {
    
    const delta = Math.sign(event.deltaY);  
    prev = num;    
    console.log('밖',num);

    clearTimeout(timeout);
    timeout = setTimeout(function(){      
    
        if(delta===1 && num <= 4){  
            
            console.log('down');       
            num++;    
            console.log(num); 
            downPage();

        }else if(delta===-1 && num <=5 && num > 1){
            console.log('up');  
            num--;       
            console.log(num);             
            //num가 1이면 page1이 보여지고 
            upPage();
        }
    },400);
        

});

let Up = btn_Wrap.querySelectorAll('a')[0];
let Down = btn_Wrap.querySelectorAll('a')[1];

Up.addEventListener('click',function(){
    console.log('클릭up');
    console.log('클릭',num); 
    console.log('클릭프리브',prev); 
    prev = num;
    clearTimeout(timeout);
    timeout = setTimeout(function(){     

        if( num <=5 && num > 1){
            console.log('up');  
            num--;       
            console.log(num); 
            upPage();
            
        }   
    },400);         
    
});

Down.addEventListener('click',function(){
    console.log('클릭down');    
    console.log('클릭',num); 
    console.log('클릭프리브',prev); 
    prev = num;
    clearTimeout(timeout);
    timeout = setTimeout(function(){  

        if(num <= 4){              
            console.log('down');       
            num++;    
            console.log(num); 
            downPage();        
        }    
    },400); 
});


function upPage(){
        section = document.getElementById('page_'+num);  
        prevsection = document.getElementById('page_'+prev); 

        //num가 1이면 page1이 보여지고 
        if(num>=1 && num < 2 ){ //num은 1보다 크거나 같다 2보다 작다
            console.log('현재',num);
            console.log('현재',section);
            console.log('page1');   
            console.log('prev',prev);             
            // section.style.transform = "translateY(0vh)";
            // prevsection.style.transform = "translateY(0vh)";
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
            console.log('up지워');            
        }else if(num >1 && num <= 2){//1보다 크고 2보다 작거나 같다
            console.log('현재',num);
            console.log('현재',section);
            console.log('page2');
            console.log('prev',prev);
            // section.style.transform = "translateY(-100vh)";
            // prevsection.style.transform = "translateY(-100vh)";
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num                        
        }else if(num > 2 && num <= 3){// 2보다 크고 3보다 작거나 같다
            console.log('현재',num);
            console.log('현재',section);
            console.log('page3');
            console.log('prev',prev);
            // section.style.transform = "translateY(-200vh)";
            // prevsection.style.transform = "translateY(-200vh)";
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
            
        }else if(num > 3 && num <= 4){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page4');
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num

        }else if(num > 4 && num <= 5){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page5');
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
        }
}

function downPage(){
        section = document.getElementById('page_'+num);                            
        prevsection = document.getElementById('page_'+prev);

        //num가 1이면 page1이 보여지고 
        if(num>=1 && num < 2 ){ //num은 1보다 크거나 같다 2보다 작다
            console.log('현재',num);
            console.log('현재',section);
            console.log('page1');
            console.log('prev',prev);
            // section.style.transform = "translateY(0vh)";
            section.style.height = "100vh";
            nowPage.innerText = num    
                   
        }else if(num >1 && num <= 2){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page2');
            console.log('prev',prev);
            prevsection.style.height = '0';
            section.style.height = "100vh";
            // section.style.transform = "translateY(-100vh)";
            // prevsection.style.transform = "translateY(-100vh)";
            nowPage.innerText = num
            
        }else if(num > 2 && num <= 3){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page3');
            console.log('prev',prev);
            // section.style.transform = "translateY(-200vh)";
            // prevsection.style.transform = "translateY(-200vh)";
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
        }else if(num > 3 && num <= 4){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page4');
            console.log('prev',prev);
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
        }else if(num > 4 && num <= 5){
            console.log('현재',num);
            console.log('현재',section);
            console.log('page5');
            console.log('prev',prev);
            prevsection.style.height = '0';
            section.style.height = "100vh";
            nowPage.innerText = num
        }
}












