async function getUser() { // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/users'); 
      // GET /users 요청, 쿼리 스트링없음
      const users = res.data; //시험에 나올수도?
      const list = document.querySelector('#list');
                  //document.getElementById('list');

      list.innerHTML = ''; // id가 list인 div태그의 내용을 지움
      // htmlelements객체.innerHTML,innerText,textContent

      //users: {id:name}형태, {1213231:김영진, 23224324:이영진,...}

      // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
      Object.keys(users) //users 데이터에서 키값들의 배열
      //['1213231',23224324','234324']
      // Object.values(users) ==> ['김영진','이영진','최영진]
      .map(function (key,index) {  //forEach 이용
        const userDiv = document.createElement('div'); //<div></div>객체

        const span = document.createElement('span');//<span></span>
        span.textContent = users[key]; // <span>users[1213231]</span>
        
        const edit = document.createElement('button');//<button></button>
        edit.textContent = '수정';//<button>수정</button>
        edit.addEventListener('click', async () => { // 수정 버튼 클릭
          // <button onclick='async()=>{}'>수정</button>
          const name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/user/' + key, // PUT /user/1213231 
                            { name }); // 요청 body
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button'); //<button></button>
        remove.textContent = '삭제';//<button>삭제</button>
        remove.addEventListener('click', async () => { // 삭제 버튼 클릭
          //<button onclick='async () => {}>삭제</button>
          try {
            await axios.delete('/user/' + key);// DELETE /user/1213231
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        userDiv.appendChild(span); //<div><span>김영진</span></div>
        userDiv.appendChild(edit); 
        //<div><span>김영진</span><button onclick='async () =>{}'>수정</button></div>
        userDiv.appendChild(remove);
         //<div><span>김영진</span><button onclick='async () =>{}'>수정</button></div>
                          //<button onclick='async'()=>{}'>삭제</button>
        
        //div
        list.appendChild(userDiv);
        /* <div id = "list">
        //<div><span>김영진</span>
              <button onclick='async () =>{}'>수정</button></div>
              //<button onclick='async'()=>{}'>삭제</button>*/
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = getUser; // 화면 로딩 시 getUser 호출
  //window.addEventListener('load',getUser);
  // onload ---> load이벤트가 발생하면 실행되는 이벤트 핸들러 함수를 등록
  // 거의 최초에 실행되는 것으로 인지: java main메소드 역할 
  // onclick, onmouseclick,onmousemove 등

  // 폼 제출(submit) 시 실행
  // resFront.html의 <form></form>중에서 아이디가 form인 객체

  
  //document.getElementById('form').addEventListener(
  document.querySelector('#form').addEventListener(   
    'submit', 
    async (e) => {//e : 이벤트객체
    e.preventDefault(); // 원래의 기능의 작동을 금지, submit처리 안되게
    const name = e.target.username.value;
    // target-form태그에 발생한 submit 이벤트 처리를 위해
    // input태그(id - username)의 값(value)을 이용
    if (!name) { // "" - 빈문자열 이면
      return alert('이름을 입력하세요');
    }
    // name에 문자열이 있음
    try {
      await axios.post(// 요청 메서드 POST /user 사용자 등록
        '/user', // url - 요청 주소 
        { name }); //{name:name}  요청 body 키값 동일=생략
      // POST /user 요청, name데이터를 등록하라고 요청
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = ''; // 입력창 빈칸으로 설정
  });
