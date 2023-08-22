# Babel과 Webpack을 이용한 ES.NEXT 개발 환경 구축

## Babel 설치
```shell
npm init -y
npm install --save-dev @babel/core @babel/cli
```

## Babel 프리셋 설치와 babel.config.json 설정 파일 작성
Babel을 사용하려면 @babel/preset-env를 설치해야 한다.
@babel/preset-env는 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것으로 [Babel 프리셋](https://babeljs.io/docs/presets)이라고 부른다.
Babel이 제공하는 공식 Babel 프리셋은 다음과 같다.

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

@babel/preset-env는 필요한 플러그인들을 지원 환경에 맞춰 동적으로 결정해준다.
프로젝트 지원 환경은 [Browserlist](https://github.com/browserslist/browserslist) 형식으로 [.browserlistrc](https://babeljs.io/docs/babel-preset-env#browserslist-integration) 파일에 상세히 설정할 수 있다.
만약 프로젝트 지원 환경 설정 작업을 생략하면 기본값을 설정된다.

typescript 환경으로 설정해보자.
```shell
npm install --save-dev @babel/preset-typescript
```
babel.config.json 파일을 만들고 다음과 같이 적어두자.
```shell
touch babel.config.json
echo '{
  "presets": ["@babel/preset-typescript"]
}' > babel.config.json
```

## 트랜스파일링
