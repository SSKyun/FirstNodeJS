/* const{
    parentPort,
    //Worker, isMainThread,
    }    = require('worker_threads')
    // parentProt - 부모 쓰레드와 연결된 객체


parentPort.on( // on() : addEventListener 역할
    'message' //1st parameter: 이벤트명
    ,(value)=>{ // 2nd Parameter : 이벤트핸들러
    console.log('from parent', value);
    parentPort.postMessage('pong'); 
    // 부모쓰레드연결객체.postMessage(부모 쓰레드에 보낼려는 데이터)
    parentPort.close(); // 부모 쓰레드와의 연결을 종료.
                        // 부모 쓰레드로 exit이벤트 발생시킴
    }
) */