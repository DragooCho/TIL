# css 더보기 / 접기 구현



## HTML

```html
<details>
  <summary></summary>
  <figure>
    <img src="https://i.imgur.com/bG0Sedi.jpg" alt="" />
  </figure>
  <div>
    이것은 설명이다.
  </div>
</details>

<details>
  <summary></summary>
  <figure>
    <img src="https://i.imgur.com/nEyDsdt.jpg" height="280" alt="" />
  </figure>
  <div>
    이것은 설명이다.
  </div>
</details>
```

더보기 접기 구현은 `details` 태그를 이용해 이를 구현할 수 있다.   

`details` 태그 내부에 `summary` 태그를 추가하면 `summary` 태그만 표시되고,    
`summary`를 클릭해야 `details` 내부의 나머지 내용이 표시한다.   
이때 `details` 태그에 `open`이란 속성이 토글된다.        





## CSS
``` css
img {
    max-width: 100%;
}

details {
    margin-bottom: 1rem;
}

details > summary {
    background: rgba(150, 255, 150);
    padding: 1rem;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.5s;
}
details > summary:before {
    content: '클릭';
}

details > summary::-webkit-details-marker {
    background: url(https://marshall-storage.tistory.com/attachment/cfile29.uf@993E16335F785C0037CB43.svg) no-repeat center;
    background-size: contain;
    color: transparent;
    transform: rotate3d(0, 0, 1, 90deg);
    transition: transform 0.25s;
}

details[open] > summary::-webkit-details-marker {
    transform: rotate3d(0, 0, 1, 180deg);
}

details[open] > summary {
    background: rgba(100, 255, 100);
    
}

details[open] > summary:before {
    content: '접기';
} 

details[open] > summary ~ * {
    animation: reveal 0.5s;
}

@keyframes reveal {
    from {
        opacity: 0;
        transform: translate3d(0, -10px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

```

`details` 내부의 요소가 표시될 땐 animation을 추가    
 opacity와 transform을 직접 추가하고 transition을 추가해도,   
 display: block과 display: none을 토글하는 것처럼   
 transition이 작동하지 않으니, 반드시 animation을 추가해야한다.             

`content:` 라는 속성을 보면 '클릭' 그리고 '접기' 라는 텍스트가 보일것이다.          
적용될 시에 해당 텍스트가 빈 노드에 생성이 되며 그렇지 않으면 사라진다.        
단 `::before`와 `::after`에만 적용된다.        





원한다면 summary 태그에 표시되는 삼각형은 summary::-webkit-details-marker   
혹은 summary::marker로 수정할 수 있다.    
반드시 두 개에 대한 스타일은 아래와 같이 따로 작성해야한다.      

```css
details > summary::marker {
/* styles */
}

details > summary::-webkit-details-marker {
/* styles */
}
```



