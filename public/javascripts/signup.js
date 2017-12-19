$(function () {
    $('#btn_signup').click(function () {
        $.post('/api_v1/user/signup',{},function (res) {
            console.log(res);
        }).fail(function () {
            console.log('error');
        });
    });
});