var words = [
    '主播6666!',
    '主播加油,我相信你是最棒的!',
    '玩的不错呀!',
    '我在默默的学着主播的骚操作...',
    '主播玩的可以，很强势!',
    '主播真的强啊!',
    '主播操作6的一批',
    '主播棒棒哒!',
    '主播操作贼帅',
    '主播牛批',
    '你是俺的偶像',
    '我太喜欢主播的风格了',
    '恕我直言,你称第二没人敢称第一',
    '看着你玩游戏是一种享受',
    '输赢不重要，我就想看你玩',
    '不管输赢，我都在默默的支持你！加油',
    '你在我心中一直都是最强的！',
    '不知道为啥，就想默默的看着你玩游戏，听着你的声音',
    '悄悄的看了你一段时间，感觉玩的不错，关注了',
    '主播小迷弟 + 1',
    '主播小迷妹 + 1',
    '如果你不下播就好了，我想一直看你玩',
    '看了那么多主播，还是比较偏爱你',
    '主播强强强强👍',
    '主播我太爱你了',
    '😍😍腻害!',
    '主播的玩的真棒!',
    '哟，不错哦!',
    '主播的声音到处散发着诱人的魅力',
    '主播很有游戏这方面的天赋',
    '玩的这么6的吗？',
    '主播这么强，打职业的吗？',
    '我就喜欢主播这种风格',
    '主播我好喜欢你鸭',
    '[色][色][色][色][色][色][色][色][色][色][色][色]大爱主播',
    '[赞][赞][赞][赞][赞][赞][赞][赞][赞]主播玩的不错哟',
    '[玫瑰][玫瑰][玫瑰][玫瑰][玫瑰][玫瑰][玫瑰][玫瑰][玫瑰][示爱][示爱][示爱] 腻害哦！',
    '[拳头][拳头][拳头][拳头][拳头][拳头]加油！(๑•̀ㅂ•́)و✧',
    '我相信你，你一定是最棒的',
    '这波怎么说？',
    '可以可以不错不错',
    '冲鸭不要怂',
    '打他啊打他',
    '别送就行',
    '你说看看这波',
    '收他收他',
    '我认为不能这样打',
    '哎 亏了啊',
    '不亏不亏',
    '可以打的真的',
    '你要相信你自己',
    '这个不能要的',
    '回回回快回',
    '嗯 可以这样',
    '兄弟呀不行呀',
    '来 大佬加油',
    '丫的别怕',
    '哈哈哈哈对对对',
    '是这样的吗？',
]
//获取随机弹幕的语句
function getRandomBulletScreen() {
    return words[Math.floor(Math.random() * words.length)]
}


//************************** 功能点 ************************************
//发送弹幕
function sendBulletScreen() {
    if (setText(0, getRandomBulletScreen())) {
        if (id("send").findOnce()) {
            id("send").findOnce().click()
        } else {
            click('发送')
        }
    }
    //30分钟内随机
    setTimeout(sendBulletScreen,Math.floor(Math.random()*1000*1800))
}

//退出APP
function ExitApp() {
    //强制停止
    var result = shell("am force-stop com.tencent.qgame", true);
    if (result.code != 0) {
        //备用退出
        back()
        sleep(300)
        back()
        sleep(300)
        back()
        sleep(300)
        back()
        sleep(300)
    }
}





return function (arr){
    console.log("参数:",arr)
}