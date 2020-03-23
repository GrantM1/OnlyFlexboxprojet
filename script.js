$(document).ready(function () {
    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#links').toggle(700);
        $('#menu-btn').toggleClass('turn')
    }
})