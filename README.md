# 리액트란 무엇인가

- 자동으로 업데이트 되는 UI
- UI = render(state)
- render 함수는 순수 함수로 작성
  - 랜덤 함수 사용(x)
  - 외부 상태 변경(x)
- state는 불변 변수로 관리
- 가상 돔(virtual dom)

---



# 바벨 사용해 보기

- 자바스크립트 코드를 변환해 주는 컴파일러
- 최신 자바스크립트 문법을 지워하지 않는 환경에서도 최신 문법 사용 가능
- 그 외에도 다양한 용도로 사용
  - 코드에서 주석을 제거하나 코드를 압축
- 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

### babel 설치

> npm install @babel/core @babel/cli @babel/preset-react
>
> - @babel/core - 바벨의 핵심 기능을 가지고 있는 패키지
>
> - @babel/cli - cli에서 사용할 바이너리가 들어있는 것
>
> - @babel/preset-react - 리액트를 위한 플러그인을 여러개를 모아놓은 거라고 보면 됨
>
>   
>
> - 바벨에는 프리셋과 플러그인이라는 개념이 있다.
>
>   - 플러그인 - 하나의 변환하는 기능의미
>   - 프리셋 - 플러그인들을 모아놓은것이 프리셋이다. (특정 목적을 위해서 하나로 모아주는 것)

### npx로 babel 트랜스컴파일 하기

> npx babel --watch sec --out-dir . --presets @babel/preset-react
>
> - npx명령어를 사용
> - --watch 모드로 동작을 실행
>   - watch모드로 동작을 실행하면 한번만 변경내용을 컴파일 해주는것이 아니라
>     변경이 될 때마다 컴파일을 자동으로 해줌
> - src --out-dir . 
>   - src폴더에 있는 것을 현재 폴더로 출력해줌
> - --presets @babel/preset-react
>   - presets으로 이전에 설치했던 @babel/preset/react를 사용한다.
> - npx babel
>   - /node_modules/.bin 폴더안에 있는 babel을 실행
>   - 만약에 없다면 다운받아서 실행시켜준다.

---

# 웹팩의 기본 개념 이해하기

- 다양한 기능 제공
  - 파일 내용을 기반으로 파일이름에 해시값 추가 → 효율적으로 브라주어 캐싱 이용
  - 사용되지 않은 코드 제거
  - 자바스크립트 압축
  - JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기
  - 환경 변수 주입
- 웹팩을 사용하는 가장 큰 이유 →→ 모듈 시스템 (ESM, commonJS)을 사용하고 싶어서
- 요즘 브라우저는 ESM을 지원한다. 하지만
  - 오래된 브라우저 지원 X
  - 많은 오픈 소스가 commonJS로 작성됨

> npm install webpack webpack-cli react react-dom
>
> 설치 후 
>
> npx webpack
>
> /dist 폴더가 생성되면서
>
> /dist 폴더 안에 main.js 생성

---

# create-react-app으로 시작하기

- 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요
  - webpack, babel, jest, eslint,polyfill, HMR, CSS 후처리, ...
- 페이스북에서 관리하는 공식 툴

>npx create-react-app 으로 시작

- 초기에 프로젝트를 구축할 때 cra를 사용할수도 있고 next.js 프레임워크를 사용하는 사람들도 있다.
  - 두개의 차이점은 서버사이드 렌더링의 지원 여부이다.
  - cra는 서버사이드 렌더링을 지원하지 않는다.
    - 할수도 있지만 깔끔하게 되지 않는다고 한다.
  - 서버사이드 렌더링을 필수로 해야되는 프로젝트라면 next.js를 선택하는게 옳은 선택이라고 한다.
  - cra의 단점
    - 빌드시스템이나 eslint등의 설정을 거의 변경할 수 없다는 점이다.
    - 설정변경이 필요하다면 next.js가 적합하다.
  - next.js
    - next.js에서는 바벨, 웹팩, eslint등의 설정을 변경할 수 있다.

---

# create-react-app으로 시작하기 2

- npm start를 하게 되면 기본적으로 http로 시작된다.

  - https로 시작을 하고 싶을때는
    - `HTTPS=true npm start` 를 해주면 https로 실행이 된다.
    - window에서는 `set HTTPS=true && npm start`라고 입력해야 한다.

- npm build를 하게되면 /build폴더에 app.js로 부터 연관된 모든파일들이 빌드된다.

- npm test를 하면 test.js파일을 테스트 한다.

  - *.test.js 말고 *.spec.js파일도 테스트 파일로 인식한다.

- npm eject를 하면 모든 설정 파일을 추출하는 명령어 이다.

  - cra를 기반으로 직접 개발환경을 구축하고 싶을 때 사용함
  - 추출을 하지 않으면 cra의 기능이 추가 됐을 때 단순히 react-scripts 버전만 올리면 되는데 추출을 하면 설정파일을 수정해야 한다는 단점이 있다.
  - 꼭 필요한게 아니면 추출은 하지 않는게 좋다.

- polyfill

  - npm run core-js 해서 다운받아 사용 해야겠지만
  - cra에는 기본적으로 core-js가 내장되어 있기 때문에 import 만 해서 사용하면된다.
  - https://github.com/zloirock/core-js

- 환경변수

  - `process.env.{변수 이름}`

  - cra에서는 `process.env.NODE_ENV`라는 환경 변수를 갖고 있다.

  - NODE_ENV는

    - \`\`npm start\`\`로 실행하면 development
    - \`\`npm test\`\`로 실행하면 test
    - \`\`npm run build\`\`로 실행하면 production

  - 환경변수를 커맨트라인에서 입력할 수도 있다.

    - `REACT_APP_`로 시작해야 한다.
    - `process.env.REACT_APP_API_URL`로 확인해보기
    - window에서는 `set "REACT_APP_API_URL=api.myapp.com" && npm start`

  - 환경변수가 많아지면 .env파일로 관리하는게 좋다.

    - 루트폴더에서 환경변수 별로 파일을 관리할 수 있다.

    - `.env.development` 파일을 만들어주고 환경변수를 입력해준다.

    - npm start로 실행을 해서 

      - ```js
        console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
        console.log("process.env.REACT_APP_TEMP1", process.env.REACT_APP_TEMP1);
        ```

        를 출력하면 .env.development의 환경변수가 출력되고

    - npm build로 build를 해서 실행을 해보면

      - 위와 같은 코드에서 .env.production의 환경변수가 출력된다.

# CSS 작성 방법 결정하기

- 일반적인 CSS 파일로 작성하기

  - 이름 충돌할수 있는 문제가 있다.

- css-module로 작성하기

  - 고유한 classname으로 충동을 막을수 있다.

  - classname을 사용하기 번거로우므로 classnames라는 패키지를 설치

    - `npm install classnames`

    - `import cn from 'classnames'`를 import 시켜주고

    - `cn(Style.box, Style.big)` 이런식으로 작성가능

    - 다른 방식도 가능하다.

    - ```js
      const isBig = size === "big";
        return (
          <button
            className={cn(Style.box, { [Style.big]: isBig, [Style.big]: !isBig })}
          >
            {isBig ? "큰 박스" : "작은 박스"}
          </button>
        );
      ```

- Sass로 작성하기

  - `npm install node-sass` 
  - node-sass라는 패키지를 설치해야 한다.
  - 하지만 cra에는 내장되어 있기때문에 그대로 사용해도 된다.

- css-in-js로 작성하기

---

# 단일 페이지 애플리케이션 (SPA) 만들기

- MPA - multi page application
- SPA - single page application
- SPA가 가능하기 위한 조건
  - 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있다.
    - 단, 브라우저는 서버로 요청을 보내지 않아야 한다.
  - 브라우저의 뒤로 가기와 같은 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있다.
    - 이 때도 브라우저는 서버로 요청을 보내지 않아야 한다.
- 위 조건을 만족시켜주는 브라우저 API
  - pushState, replaceState 함수
  - popstate 이벤트

### react-router-dom을 이용해서 SPA 만들어보기

- spa2 폴더 참고하기
- BrowserRouter 컴포넌트 안에서 Link와 Route를 사용
  - Link는 클릭했을때 to에 적어놓은 링크로 url 이동
  - Route는 해당하는 url에 맞게 컴포넌트를 출력

