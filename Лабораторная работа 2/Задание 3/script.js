let cyr = 
[
    'Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э'
];
let lat = 
[
    'Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e'
];
let text = '';

function cyr_to_lat(text) {
    for (let i = 0; i < cyr.length; i++){
        let regular_expression = new RegExp(cyr[i], "g");
        text = text.replace(regular_expression, lat[i]);
    }
    return text;
}

do {
    text = prompt("Введите текст на русском языке:");
} while (text === "" || text === null);

console.log(cyr_to_lat(text));