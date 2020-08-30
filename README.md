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

