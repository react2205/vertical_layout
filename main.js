//브라우저가 로딩이 완료되었을 때 
window.addEventListener('load', ()=>{
    //isotope 플러그인을 적용
    const grid = new Isotope('section', { //배치할 요소의 부모요소명
        itemSelector : 'article', //배치할 요소명 
        columnWidth : 'article', //너비값 구할 요소명 
        transitionDuration : '0.8s' //화면 재배치시 요소의 움직이는 속도 
    }); 

    //소팅 버튼을 변수로 저장 
    const btns = document.querySelectorAll("main ul li"); 

    //sort 버튼 클릭이벤트 
    for(let el of btns){
        //버튼을 클릭했을 때 
        el.addEventListener("click", e=>{
            e.preventDefault(); 

            //클릭한 버튼의 a요소에서 href값을 구해서 변수로 저장 
            const sort = e.currentTarget.querySelector("a").getAttribute("href"); 

            //필터값으로 재배치 
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

