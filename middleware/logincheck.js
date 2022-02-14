let logincheck = (req,res)=>{
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

module.exports = logincheck