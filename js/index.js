window.onload = function () {
    var mapcode = document.querySelector('#inputMapCode');
    var jump = document.querySelector('#jump-to-rockstar')
    jump.addEventListener('click', function () {
        document.location.href = 'https://socialclub.rockstargames.com/job/gtav' + mapcode.value;
    })
}