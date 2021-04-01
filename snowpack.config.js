module.exports = {
  // 빌드에 사용할 현재 경로와 빌드 경로를 마운트
  mount: {
    // 현재 경로 : 빌드 경로
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  devOptions: {
    port: 1234, // 개발 서버를 실행할 포트 번호
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
  ],
  // buildOptions: {
  //   // out: 'build', // 최종 빌드를 출력하는 로컬 디렉토리 이름
  //   // baseUrl: '/', // 제품 모드의 기본 URL 지정, 현재 앱이 하위 디렉토리로 배포되는 경우 유용
  //   // clean: false, // 빌드 전 기존 데이터 제거
  //   // metaDir: '__snowpack__', // HMR 및 ENV 등의 정보를 출력할 디렉토리 이름
  //   // sourceMap: false, // 소스 맵 사용 여부
  //   // webModulesUrl: 'web_modules' // 사용하는 웹 모듈이 저장될 디렉토리 이름
  // },
  // installOptions: {
  //   // dest: 'web_modules', // 사용하는 웹 모듈이 저장될 디렉토리 이름
  //   // sourceMap: false, // 설치된 모듈의 소스맵 사용
  //   // env: {}, // 환경 변수 지정
  //   // treeshake: false, // 의존성 모듈의 트리쉐이킹 여부(제품 모드만 동작)
  //   // installType: false, // 모듈 설치 시 타입 정의를 함께 설치(타입스크립트)
  //   // namedExports: [], // `Uncaught SyntaxError: The requested module '/web_modules/XX.js' does not provide an export named 'YY'` 에러가 발생하는 경우, `namedExports: ['XX']`
  //   // externalPackage: [], // 무시할 외부 모듈의 목록, E.g. 'fs'
  //   // packageLookupFields: [], // ??
  //   // rollup: { // Snowpack이 내부적으로 사용하는 Rollup을 더욱 세부적으로 제어하기 위한 옵션
  //   //   plugins: [], // Rollup 플러그인을 지정
  //   //   dedupe: [], // 중복 번들을 방지하기 위한 외부 모듈 이름을 지정(rollup-plugin-node-resolve)
  //   //   context: [] // 최상위 `this`를 지정, 최상위 변수를 참조하는 레거시 CJS 모듈의 오류 해결에 유용 
  //   // },
  // }
}