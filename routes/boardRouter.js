const express=require('express')
const router = express.Router() //메소드 호출
const {list} = require('../model/board')

router.get('/list',(req,res)=>{
    res.render('../views/board/list',{
        list:list,
    })
})

router.get('/write',(req,res)=>{
    res.render('../views/board/write')
})

router.post('/write',(req,res)=>{
    list.push(req.body)
    res.redirect('list')
})

router.get('/view',(req,res)=>{
    const index = req.query.index
    console.log(index)
    const view = list[index-1]
    res.render('../views/board/view',{
        index:index,
        data:view,
    })
})

router.post('/delete',(req,res)=>{
    const index=req.body.index-1//시작 인덱스 찾기
    list.splice(index,1)//인덱스부터 시작해서 1개 제거
    res.redirect('list')
})

router.get('/update',(req,res)=>{
    const index = req.query.index
    const view = list[index-1] //현재 보고있는 글정보
    console.log('view 출력 : ',view)
    res.render('../views/board/update',{
        index:index,
        data:view,
    })
})

router.post('/update',(req,res)=>{
    const index = req.body.index//입력받은 내용
    console.log(req.body)
    const item={
        subject:req.body.subject, //입력받은 내용 넣기
        username:req.body.username,
    }

    list[index-1]=item//새 객체를 list에 추가
    res.redirect(`view?index=${index}`)
})

module.exports=router