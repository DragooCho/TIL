## github에 저장된 레지스트리가 로컬파일보다 commit이 먼저 앞서있다면...

- 보통 'README.md' 같은 파일을 깃허브 홈페이지에서 수정했다면      
  로컬 파일에서도 똑같이 갱신하고 싶을것이다. 그럴때는 아래처럼.....

`````````````````
$ git pull 
`````````````````



- git pull 를 터미널에 입력해서 Updating시킨다.

<br />
<br />
<br />

## git pull이 아니라 다른 명령어를 시도한다면 ???
- 로컬에서 commit 안하고 깃허브 홈패이지에서       
  README.md 파일을 수정한후 Git push로 시도하면 나오는 오류

`````````````````
error: failed to push some refs to 'https://github.com/DragooCho/TIL.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
`````````````````

- 구글링으로 알아보니 [여기 블로그](https://doozi316.github.io/errorlog/2019/09/30/error1/)에서 
임시방편으로     
"+" 를 붙여 해결 할 수 있었다고 한다. 아래처럼 붙이면 된다.

```````````````
$ git push -u origin +main


// 기존에 master로 브렌치를 만들었다면
$ git push -u origin +master
````````````````