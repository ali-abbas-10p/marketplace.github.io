
$(function () {

    $('#btn_signup').click(function () {
        var f_name = $('#f_name');
        formValidator.isValidName(f_name.val(), $('#span_error_name'));


/*
        $.post('/api_v1/user/signup',{},function (res) {
            console.log(res);
        }).fail(function () {
            console.log('error');
        });
*/

    });
});