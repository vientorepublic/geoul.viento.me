# geoul.viento.me

Viento Mirror의 새로운 메인페이지 입니다.
Nuxt.js기반의 Vue.js 서버 사이드 렌더링과 정적 페이지 생성을 지원합니다. 정적 페이지 사용을 권장합니다.

[ftp.kaist.ac.kr](https://ftp.kaist.ac.kr)에서 영감을 받아 시작 되었습니다. 프론트엔드 디자인은 [NY64](https://github.com/ny0510)님이 해주셨습니다. 특별히 감사드립니다.

[Geoul-Backend](https://github.com/vientorepublic/Geoul-Backend)가 필요합니다. 각 저장소의 동기화 스크립트에 저장소 이름과 상태를 매개변수로 넘겨야합니다.

해당 JSON 데이터베이스를 Nuxt.js에서 읽을 수 있도록 경로를 적절히 수정 하십시오.

## Clone this repository
```git clone https://github.com/vientorepublic/geoul.viento.me.git```

## Build
```yarn build```

## Start (SSR)
```yarn start```

## Build static page
```yarn generate```
