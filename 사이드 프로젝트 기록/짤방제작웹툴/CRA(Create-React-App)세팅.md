# 짤방 이미지 편집 툴 (진행중)
<br /><br />


## 이번 프로젝트의 개발 목적

- 유머스럽고 재미있는 짤방 이미지를 누구나 간편하게 만들 수 있는 웹팩 홈페이지        
  제작으로 브라우저를 이용하는 모든 사용자들에게 배포하는게 목적이다.
<br /><br />
       
## 참고했던 사이트

![짤방사이트](https://github.com/DragooCho/TIL/blob/main/image/2021-02-18-140325.png?raw=true)

- [이럴땐 이런짤](https://2runzzal.com/) 이라는 각종 짤방를 다운로드 받을 수 있는 사이트다.

    짤방 이미지를 자신이 원하는 문구로 넣을 수 있고 그런 이미지를 다운로드를

    할 수 있었는데 이게 아주 마음에 들어서 이 기능을 직접 만들기로 결정

- 물론 이 사이트 모든 부분을 본인이 아직 구현은 힘들기에

    이미지를 편집하고 돌려 받는 기능만 계획함.
<br /><br />

## create-react-app으로 초기설치

<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang1.png?raw=true)

<br />

리액트를 조금이라도 아는 사람은 유명한 보일러 플레이트로 프로젝트를 시작하기 위해         
터미널에서 설치를 원하는 디렉토리로 진입한 다음      
"npx create-react-app JJalbang_create_custom"        
을 입력했으나 위 사진 같은 이유로 거절 당했다....  얌전히 소문자로 바꾸고 다시 입력했다.

<br />

```
$ npx create-react-app jjalbang_create_custom
```



터미널이 이런저런 버전들이 설치 되는걸 보여주고  

Happy hacking! 멘트로 마무리 해준다.!!!

```$ code jjalbang_create_custom``` 으로 VS code를 실행한다.

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang2.png?raw=true)

gitHub 홈페이지에서 new repository 클릭해 앞으로 커밋을 올려 둘 새 레포지토리를 만든다.

지금처럼 디렉토리를 미리 만든후 new repository를 만드는것이면 

체크 사항 부분은 전부 건너 뛰는게 좋다.

기존 디렉토리에 ```git init```을 하기전에 CRA가 있는 디렉토리와 상관없는 

repository를 만들어 버리기 때문이다.

따라서 레포지토리 이름만 작성 후 빨간원의 버튼을 클릭한다.

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang3.png?raw=true)

빨간원의 버튼을 클릭하면 해당 명령어들을 모두 복사하게 된다. 

그대로 터미널에 붙여넣기 해본다.

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang4.png?raw=true)

![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang5.png?raw=true)

그림처럼 CRA의 초기세팅 내용 그대로 깃허브에 올라왔음을 알 수 있다.

또 보면 branch가   master -> main 로 바뀌여 있는데..... 

<br />

[마이크로소프트 깃허브, '마스터·슬레이브' 용어 없앤다 - 씨넷코리아 | 글로벌 IT 미디어 (cnet.co.kr)](https://www.cnet.co.kr/view/?no=20200728102539)

깃허브 측에서 Black Lives Matter 운동의 이유로 

기본으로 주어진 세팅 그대로 new repository 작업을 했을시, 

main으로 생성된다고 한다.

원한다면 기존의 master로 바꿀 수 있다고는 하지만 좋은 뜻으로 나온 정책이고 

관련된 명령어도 많이 바뀌는게 아니라서 그대로 진행했다.

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang6.png?raw=true)

http://localhost:3000/ 을 실행해보면 앱이 잘 작동하는 것도 확인 가능

이제 여기서 쓰지 않는 테스트 기능을 제거 하기로 한다.

<br />
<br />


```src / index.js```

```react
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

```

<br />

```src / App.js```

```react
import React from "react";

function App() {
  return <div>jalbang</div>;
}

export default App;
```

이렇게 쓸때없는 코드를 지우고 변경한 다음...

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang7.png?raw=true)

![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang8.png?raw=true)

그림처럼 src 디렉토리 안에 있는 ```App.js```,  ```index.js``` 파일만 남기고 삭제한다.

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang10.png?raw=true)

```README.md``` 도 수정하고....

<br />
<br />



![](https://github.com/DragooCho/TIL/blob/main/image/jjalbang9.png?raw=true)

```$ npm start```로 테스트 해본다. 

브라우저의 URL (http://localhost:3000/)에서  'jalbang' 텍스트가 잘 나오면 성공이다.

이로서 개인적으로 진행할 **토이 프로젝트의 밑그림**이 완성되었다!!!










