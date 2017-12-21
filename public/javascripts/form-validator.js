
function _isValidName(name, errorView) {
    if(name.length === 0)
    {
        errorView.style.visibility = 'visible';
        return false;
    }
    else
    {
        errorView.style.visibility = 'hidden';
        return true;
    }
}

formValidator = {
    isValidName : _isValidName
};