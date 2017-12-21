
$(function () {

    $('#btn_signup').click(function () {
        console.log(formValidator.isValidName())


/*
        $.post('/api_v1/user/signup',{},function (res) {
            console.log(res);
        }).fail(function () {
            console.log('error');
        });
*/

    });
});