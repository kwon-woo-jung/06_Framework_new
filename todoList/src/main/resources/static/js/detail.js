// 목록으로 버튼 동작 (메인페이지로 요청)
const goToList = documnet.querySelector('#goToList');

goToList.addEventListener("click", () => {
  location.href = "/"; // 메인 페이지 요청(GET 방식)
});

// 완료 여부 변경 버튼
const comleteBtn = document.querySelector(".complete-btn");

comleteBtn.addEventListener("click", e => { // 이벤트가 일어난 대상이 e. 타겟
  // 요소.dateset : dats=* 속성에 저장된 값 반환
  // data-todo-no 세팅한 속성값 얻어오기
  // data-todo-no(html -를 사용) -> dataset.todoNo (js 카멜케이스)

  const todoNo = e.target.dataset.todoNo; 
  let complete = e.target.innerText; // 기존 완료 여부 값 얻어오기

  // Y <-> N
  complete = (complete === 'Y') ? 'N' : 'Y';

  // 완료 여부 수정 요청하기
  location.href = `/todo/changeComplete?todoNo=${todoNo}&complete=${complete}`;
  
  // /todo/changeComplete?todoNo=${todoNo}&complete=Y
  // console.log(todoNo);
});




// 수정 버튼
const updateBtn = document.querySelector('#updateBtn');

// 삭제 버튼
const deleteBtn = document.querySelector("#deleteBtn");

