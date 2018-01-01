
$(function () {
    formValidator.validateCredentialForm('#form_signup');

    $('#btn_signup').click(function () {
        if($('#form_signup').valid()) {
            $.post('/api_v1/user/signup',{
                name : $('#i_name').val(),
                email : $('#i_email').val(),
                password: $('#i_password').val()
            },function (res) {
                switch (res.code) {
                    case 200:
                        $.load('/home');
                        break;
                    case 406:
                        // $.load('/home');
                        break;
                }
                console.log(res);
            }).fail(function () {
                console.log('error');
            });
        }


    });
});