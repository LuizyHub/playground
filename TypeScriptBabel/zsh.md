```shell
npm init -y
```

```shell
tsc --init
```

tsconfig.json
```json
"compilerOptions": {
  // tsc를 사용해 .js 파일이 아닌 .d.ts 파일이 생성되었는지 확인합니다.
  "declaration": true,
  "emitDeclarationOnly": true,
  // Babel이 TypeScript 프로젝트의 파일을 안전하게 트랜스파일할 수 있는지 확인합니다.
  "isolatedModules": true
}
```

```shell
npm install --save-dev @babel/core
```
```shell
npm install --save-dev @babel/cli
```

```shell
npm install --save-dev @babel/preset-typescript
```

```shell
touch babel.config.json

echo '{
  "presets": ["@babel/preset-typescript"]
}' > babel.config.json
```


```shell
babel --presets @babel/preset-typescript index.ts
```
```shell
npx babel --presets @babel/preset-typescript *.ts
```