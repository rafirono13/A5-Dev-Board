function setInnerTextById(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
}