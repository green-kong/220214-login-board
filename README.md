# Board / Login

## 업무분담

### - 동훈 : git 관리, 프론트

### - 현진 : 게시판기능

### - 수환 : 로그인 기능

## API 설계

### 로그인

#### - GET / : 메인페이지

#### - GET user/login : 로그인 화면

#### - POST user/login : 로그인 성공하면 게시판과, logout 버튼이 있는 메인페이지로 로그인 실패하면, 등록되지 않은 회원입니다. alert 로그인화면으로

### 게시판

#### - GET board/list : 글목록 페이지

#### - GET board/write : 글쓰기 페이지

#### - POST board/write : 내용 포스팅, 글작성완료 알림 후, view 로 이동

#### - GET board/view : 글 확인 페이지

#### - GET board/edit : 글 수정 페이지, 기존 작성내용 보여지기

#### - POST board/edit : 글 수정 적용 후 view로 이동

#### - GET board/delete : 글 삭제, 삭제 후, 리스트로 이동.
