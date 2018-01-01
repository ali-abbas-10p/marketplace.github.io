formValidator = {};
formValidator.isValidName = function (name, errorView) {
    if(name.length === 0)
    {
        errorView.show();
        return false;
    }
    else
    {
        errorView.hide();
        return true;
    }
};

formValidator.isValidEmail = function (email, errorView) {
    var isEmailValid = new RegExp("[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+").test(email);
    if(isEmailValid) {
        errorView.hide();
        return true;
    }
    else {
        errorView.show();
        return false;
    }
};

formValidator.isValidPassword = function (password, errorView) {
    if(password.length>4){
        errorView.hide();
        return true;
    }
    else
    {
        errorView.show();
        return false;
    }
};