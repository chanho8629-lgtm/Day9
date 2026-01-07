    // 전체 동의 1개와 선택 동의 3개가 있다.
    // 전체 동의를 체크하면, 선택 동의가 모두 체크되고,
    // 전체 동의를 해제하면, 선택 동의가 모두 해제된다.
    // 전체 동의 상태에서 선택 동의 하나라도 해제되면,
    // 전체 동의도 체크가 해제된다.
    // 전체 동의를 체크하지 않았더라도, 선택 동의를 모두 체크하면,
    // 전체 동의도 체크된다.

    // Array에서 끌어다가 NodeList에서 쓸 수 있게 만듬
    NodeList.prototype.forEach = Array.prototype.forEach;
    NodeList.prototype.filter = Array.prototype.filter;

    // 변수(저장소)
    const inputAll = document.querySelector(".all"); // .all 클래스로 선택자 조회(단일)
    const terms = document.querySelectorAll(".term"); // .term 클래스로 선택자 조회(복수)
    const inputs = document.querySelectorAll("input"); // input 태그로 전체 조회(복수)

    // 감지
    document.addEventListener("click", (e) => {// 이벤트 발생(클릭)
        // inputs(복수).나누기(input(단일 저장))
        inputs.forEach((input) => { // 반복문 input 개별 나누기
            // 감지
            input.addEventListener("change", (e) => { // 인풋 속성 감지(change)
                // 변수
                const inputsChk = terms.filter((term) => term.checked).length === terms.length; // class=term이 다 ture인지 확인
                const allChk = input.name === "all" // name=all인지 확인
                // 반복문
                if(input.checked){
                    if(allChk) inputs.forEach((term) => { term.checked = true; });
                    if(inputsChk) inputAll.checked = true;
                } else {
                    if(allChk) inputs.forEach((term) => { term.checked = false; }); 
                    if(!inputsChk) inputAll.checked = false;
                }
            })
        })
    })


    // // Array에서 끌어다가 NodeList에서 쓸 수 있게 만듬
    // NodeList.prototype.filter = Array.prototype.filter;

    // // 변수
    // const all = document['my-form'].all;
    // const terms = document.querySelectorAll("input.term");

    // // 감지
    // all.addEventListener("change", (e) => {
    //     terms.forEach((term) => {
    //         term.checked = e.target.checked;
    //     });
    // });
    // terms.forEach((term) => {
    //     term.addEventListener("change", (e) => {
    //         all.checked = terms.filter((term) => term.checked).length === terms.length;
    //     });
    // });