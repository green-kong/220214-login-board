const express = require('express');
const router = express.Router(); //메소드 호출
const { list } = require('../model/board');
const { alertmove } = require('../util/alertmove.js');

router.get('/list', (req, res) => {
  res.render('../views/board/list', {
    list: list,
  });
  console.log(req.session);
});

router.get('/write', (req, res) => {
  const { user } = req.session;
  res.render('../views/board/write', { user });
});

router.post('/write', (req, res) => {
  list.push(req.body);
  console.log(list);
  res.redirect('list');
});

router.get('/view', (req, res) => {
  const index = req.query.index;
  console.log(index);
  const view = list[index - 1];
  res.render('../views/board/view', {
    index: index,
    data: view,
  });
});

router.post('/delete', (req, res) => {
  const { user } = req.session;
  const index = req.body.index - 1;
  if (list[index].userid === user.userid) {
    list.splice(index, 1); //인덱스부터 시작해서 1개 제거
    res.redirect('list');
  } else {
    res.send(
      alertmove(
        `/board/view?index=${index + 1}`,
        '본인이 작성한 글만 삭제할 수 있습니다.'
      )
    );
  }
});

router.get('/update', (req, res) => {
  const { user } = req.session;
  const index = req.query.index;
  console.log(list);
  if (list[index - 1].userid === user.userid) {
    const view = list[index - 1]; //현재 보고있는 글정보
    console.log('view 출력 : ', view);
    res.render('../views/board/update', {
      index: index,
      data: view,
    });
  } else {
    res.send(
      alertmove(
        `/board/view?index=${req.query.index}`,
        '본인이 작성한 글만 수정 할 수 있습니다.'
      )
    );
  }
});

router.post('/update', (req, res) => {
  const index = req.body.index; //입력받은 내용
  console.log(req.body);
  const item = {
    subject: req.body.subject, //입력받은 내용 넣기
    username: req.body.username,
  };

  list[index - 1] = item; //새 객체를 list에 추가
  res.redirect(`view?index=${index}`);
});

module.exports = router;
