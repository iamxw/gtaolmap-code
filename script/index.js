window.onload = function () {
    let mapCode = document.querySelector('#code');
    let jump = document.querySelector('#submit-to-rockstar-gta-v-job');
    // 判断字符是否是空的
    jump.addEventListener('click', function () {
        if (mapCode.value === '') {
            jump.style.backgroundColor = '#dc4846';
            jump.style.color = '#fff';
            jump.textContent = '✖' + ' ' + '未输入任何内容';
            mapCode.style.borderColor = '#dc4846';
        } else {
            window.open('https://socialclub.rockstargames.com/job/gtav/' + mapCode.value);
        }
    })
    mapCode.addEventListener('click',function (){
        mapCode.style.borderColor = '#FFFFFF7F';
        jump.textContent = '提交';
        jump.style.color = '#000';
        jump.style.backgroundColor = '#fff';
    })
}