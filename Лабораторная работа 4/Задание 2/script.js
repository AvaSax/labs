let str = [`353425(gdfg dbvxgdyaneznau@gmail.com tiktotakiy@lol.ru!fdgdfgbdfgdf
    https://www.warshit.com/wwelekwflk/asqwoekqw;ek
    Some examples: qwerty@yourdomain.com qwerty@yourdomain.com,
    rayklarin@yourdomain.com, asdfg@yourdomain.com, etc.KKf.. vsmislesya-kto@lol-kek.org LGqweurname@yourdomain.com,
    info@yourdomain.com, sales@yourdomain.comDGFKSDKGF@
    html@html@html@.ru `];
let result = str.join('').match(/[a-zA-Z0-9]{1}((\-|\.){0,1}[a-zA-Z0-9])+\@(([a-zA-Z0-9](\_|\-|){0,1})+\.[a-zA-Z]{2,5})/g);
console.log(result.join('\n'));