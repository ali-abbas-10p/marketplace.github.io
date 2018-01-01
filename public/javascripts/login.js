
$(function () {
    $('#form_login').validate({
        rules:{
            'email':{
                required: true,
                pattern: "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+"
            },
            'password': {
                required: true,
                minlength:5
            }
        },
        messages:{
            'email':{
                required: 'email is required',
                pattern: 'enter valid email'
            },
            'password': {
                required: 'enter password',
                minlength:'Password can\'t be less than 5 characters'
            }
        }
    });

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