
$(function () {
    formValidator.validateCredentialForm('#form_signup');

    var btnSignup = $('#btn_signup');
    btnSignup.click(function () {
        if($('#form_signup').valid()) {
            btnSignup.attr('disabled','disabled');
            $.post('/api_v1/user/signup',{
                name : $('#i_name').val(),
                email : $('#i_email').val(),
                password: $('#i_password').val()
            },function (res) {
                btnSignup.removeAttr('disabled');
                switch (res.code) {
                    case 200:
                        $(location).attr('href','/home');
                        break;
                    case 406:
                        $('#alert').addClass('in');
                        break;
                }
            }).fail(function () {
                btnSignup.removeAttr('disabled');
                console.log('error');
            });
        }


    });
});