## github에 저장된 레지스트리가 로컬파일보다 commit이 먼저 앞서있다면...



`````````````````
$ git merge
`````````````````



- Git merge를 터미널에 입력해서 병합시킨다.

<br />
<br />
<br />

## Git push 가 잘 안된다면 ???
- 로컬에서 commit 안하고 깃허브 홈패이에서 README.md 파일을 수정해서인지 Git push가 아닌 이런 오류가 나왔다.

`````````````````
error: failed to push some refs to 'https://github.com/DragooCho/TIL.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
`````````````````

구글링으로 알아보니 [여기 블로그](https://doozi316.github.io/errorlog/2019/09/30/error1/)에서 
임시방편으로 "+" 를 붙여 해결 할 수 있었다고 한다. 아래처럼 붙이면 된다.

```````````````
$ git push -u origin +main


// 기존에 master로 브렌치를 만들었다면
$ git push -u origin +master
````````````````