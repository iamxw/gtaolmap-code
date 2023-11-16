window.onload = function () {
    let mapCode = document.querySelector('#code');
    let jump = document.querySelector('#submit-to-rockstar-gta-v-job');
    let jump_Tips = document.querySelector('#tips');
    jump_Tips.style.color = '#49d590';
    // 判断字符是否是空的
    jump.addEventListener('click', function () {
        if (mapCode.value === '') {
            jump.style.backgroundColor = '#dc4846';
            jump.style.color = '#fff';
            jump_Tips.style.color = '#DC4846FF';
            jump_Tips.textContent = 'The text box is empty, please check and try again';
            mapCode.style.borderColor = '#dc4846';
        } else {
            window.open('https://socialclub.rockstargames.com/job/gtav/' + mapCode.value);
        }
    })
    mapCode.addEventListener('click', function () {
        mapCode.style.borderColor = '#FFFFFF7F';
        jump.textContent = '搜索此差事';
        jump.style.color = '#000';
        jump.style.backgroundColor = '#fff';
        jump_Tips.style.color = '#49d590';
        jump_Tips.textContent = 'Enter the code in the input box, then click "Search for this job" button.';
    })
}