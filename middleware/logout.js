const {alertmove} = require(`../util/alertmove`)

let logout = (req,res)=>{
    req.session.destroy(()=>{
        req.session
    })
    res.send(alertmove(`/`,`로그아웃이 완료되었습니다.`))
}

module.exports = logout