window.addEventListener('load', ()=>{
    const grid = new Isotope('section', { //배치할 요소의 부모요소명
        itemSelector : 'article', //배치할 요소명 
        columnWidth : 'article', //너비값 구할 요소명 
        transitionDuration : '0.8s' //화면 재배치시 요소의 움직이는 속도 
    }); 


    const btns = document.querySelectorAll("main ul li"); 

    //sort 버튼 클릭이벤트 
    for(let el of btns){
        el.addEventListener("click", e=>{
            e.preventDefault(); 

            const sort = e.currentTarget.querySelector("a").getAttribute("href"); 

            grid.arrange({
                filter:sort
            }); 

            for(let el of btns){
                el.classList.remove('on'); 
            }
            e.currentTarget.classList.add('on'); 
        })
    }

});

