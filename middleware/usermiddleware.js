const user = require(`../model/user`)
const {alertmove} = require(`../util/alertmove`)

exports.login = (req,res)=>{
    res.render(`user/login`)
}

exports.logincheck = (req,res)=>{
    let {userid,userpw} = req.body
    let [item] = user.filter(a=>(a.userid == userid && a.userpw==userpw))
    // let [item2] = user.filter(b=>(b.item1.pw==userpw))
    if (item != undefined) {
        if (item.pw != undefined) {
            req.session.user = {...item}         
            res.redirect(`/`)
        } else {
            res.send(alertmove(`/user/login`,`비밀번호가 일치하지 않습니다.`))
        }
    } else {
        res.send(alertmove(`/user/login`,`등록되지 않은 아이디입니다.`))
    }
}

exports.logout = (req,res)=>{
    req.session.destroy(()=>{
        req.session
    })
    res.send(alertmove(`/`,`로그아웃이 완료되었습니다.`))
}

exports.profile = (req,res)=>{
    res.render(`user/profile`)
}