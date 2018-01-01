
$(function () {
    formValidator.validateCredentialForm('#form_login');
    $('#btn_login').click(function () {
        var isValid = $('#form_login').valid();
        console.log(isValid);
        if(isValid) {
            $.post('/api_v1/user/login',{
                email : $('#i_email').val(),
                password: $('#i_password').val()
            },function (res) {
                switch (res.code) {
                    case 200:
                        $.load('/home');
                        break;
                    case 406:
                        $('#alert').addClass('in');
                        break;
                }
                console.log(res);
            }).fail(function () {
                console.log('error');
            });
        }
    });
});