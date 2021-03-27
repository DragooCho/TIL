# contextAPI 로 리액트 상태 관리 레벨업 하기!

복습: No
작성일시: 2021년 3월 28일 오전 12:39

[contextAPI 로 리액트 상태 관리 레벨업 하기!](https://youtu.be/sqz45pnvJHg)

contextAPI 는 일반적인 props를 자식 컴포넌트에 일일히 전달할 필요없이       
하나의 context 파일을 생성해 Provider값을 지정하고       
" <관리 할 함수명> 적용될 컴포넌트들 </관리 할 함수명>  " 처럼 태그식으로 감싸준다.



![contextAPI%20%E1%84%85%E1%85%A9%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%20%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%20%E1%84%85%E1%85%A6%E1%84%87%E1%85%A6%E1%86%AF%E1%84%8B%E1%85%A5%E1%86%B8%20%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5!%20f7c6792e5a5e48968d32553e6d9d8dc8/__2021-03-28_000204.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d408987-ec42-4156-bfee-96dfad50b6b1/__2021-03-27_235453.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T154540Z&X-Amz-Expires=86400&X-Amz-Signature=165ac1d05de3ef573f267b5d16a34d1da27dbdf944a7126ffa19113f60b51968&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235453.png%22)



![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4af1b620-d808-4563-8b64-ae66501ee967/__2021-03-27_235611.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T154942Z&X-Amz-Expires=86400&X-Amz-Signature=229ceb4e24b54fec159ea979659b0eed8fb68e088a5006cc4485c6dcdb9921a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235611.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/caee9cfa-bd25-4409-98db-b74a0fd60e4f/__2021-03-27_235716.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155053Z&X-Amz-Expires=86400&X-Amz-Signature=75cd20690b3a2567fc9d7708732317846560161bcbbfe66c379a31b88376dd57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235716.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1243b7e-46df-469f-aaa1-f3e097987dfb/__2021-03-27_235803.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155134Z&X-Amz-Expires=86400&X-Amz-Signature=090fa0732231b0862247fced4c65fe86ad27ad056e24967a7e017ad1f4856bee&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235803.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a45d1faa-cdb4-4dd3-aff3-fbfa7f5fb7ff/__2021-03-27_235822.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155159Z&X-Amz-Expires=86400&X-Amz-Signature=0e16c601cb7887108eef3aee6dd30b3a4c8d96c2f69ba5aefea230606c29884b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235822.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/008cedb5-6bea-4832-8e37-0a86a7688b63/__2021-03-27_235904.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155216Z&X-Amz-Expires=86400&X-Amz-Signature=0734e20fb2a7da052b158c321863ed1e2b486d372635072122bf71ea7c924b7a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235904.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f005d865-6b16-497c-89b5-cfcc264aac98/__2021-03-27_235955.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155245Z&X-Amz-Expires=86400&X-Amz-Signature=25a774db56167b5a66f55ed503985ac43fcd32090cf074be11c065cddee0b8e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-27_235955.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07942fad-ed5b-44d5-841f-655252c70c5b/__2021-03-28_000204.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210327T155321Z&X-Amz-Expires=86400&X-Amz-Signature=0c7bf8f9532cf0f72425d6913de13b259e98190dcb01cb8d89f2c6fbbb1832d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__2021-03-28_000204.png%22)

