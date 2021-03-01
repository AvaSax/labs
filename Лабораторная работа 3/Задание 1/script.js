function isPalindromWord(word) {
    let array = new Array();
    array = word.toLowerCase().split(' ').join('');
    let newArray = [];
    let i = 0;
    for (let j = array.length; j >= 0; j--) {
        newArray[j] = array[i];
        i++;
    }
    if (newArray.join('') === array)
        return true;
}

while (true) {
    let word = prompt("Введите слово-палиндром", 'А роза упала на лапу Азора');
    if (word != null && word != '') {
        if (isPalindromWord(word) === true) {
            document.write("Это слово является палиндромом!");
            break;
        }
        else {
            document.write("Это слово не является палиндромом!");
            break;
        }
    }
}