
$(function () {

    $('#btn_signup').click(function () {
        var f_name = $('#f_name');
        var f_email= $('#f_email');
        var f_password= $('#f_password');
        var nameValid = formValidator.isValidName(f_name.val(), $('#span_error_name'));
        var emailValid = formValidator.isValidEmail(f_email.val(), $('#span_error_email'));
        var passwordValid = formValidator.isValidPassword(f_password.val(), $('#span_error_password'));
        var tcValid = $('#cb_tc').prop('checked');

        if(!tcValid) {
            var eleAlertTC = $('#alert_tc');
            eleAlertTC.addClass('fade in');
        }

        if(nameValid && emailValid && passwordValid && tcValid) {
            $.post('/api_v1/user/signup',{
                name : f_name.val(),
                email : f_email.val(),
                password: f_password.val()
            },function (res) {
                console.log(res);
            }).fail(function () {
                console.log('error');
            });
        }


    });
});