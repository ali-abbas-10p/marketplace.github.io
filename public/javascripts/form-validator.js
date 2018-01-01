formValidator = {};


formValidator.validateCredentialForm = function ($formId) {
    $($formId).validate({
        rules:{
            'email':{
                required: true,
                pattern: "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+"
            },
            'password': {
                required: true,
                minlength:5
            },
            'name': {
                required: true,
                minlength:3
            }
        },
        messages:{
            'email':{
                required: 'Email is required',
                pattern: 'Enter valid email'
            },
            'password': {
                required: 'Enter password',
                minlength:'Password can\'t be less than 5 characters'
            },
            'name': {
                required: 'Enter name',
                minlength:'Name can\'t be less than 3 characters'
            }
        }
    });

};