
$(function () {
    formValidator.validateCredentialForm('#form_login');
    var btnLogin = $('#btn_login');
    btnLogin.click(function () {
        var isValid = $('#form_login').valid();
        console.log(isValid);
        if(isValid) {
            btnLogin.attr('disabled','disabled');
            $.post('/api_v1/user/login',{
                email : $('#i_email').val(),
                password: $('#i_password').val()
            },function (res) {
                btnLogin.removeAttr('disabled');
                switch (res.code) {
                    case 200:
                        $(location).attr('href','/home');
                        break;
                    case 406:
                        $('#alert').addClass('in');
                        break;
                }
                console.log(res);
            }).fail(function () {
                btnLogin.removeAttr('disabled');
                console.log('error');
            });
        }
    });
});