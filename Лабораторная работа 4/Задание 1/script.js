let str = [`353425(gdfg dbvxgdhttps://example.example/example/exampl%%%e.example. gbvbdgde,.bvcdegertgffvcxdz или
    https://www.example.exampdfdfdfle,,,,.gfdg532343gsaFJSDJIDHhttp://kek.lol/omeg!!!APEP%%EGA.PDFfile.pdf111111gfgvxcg.da/gfrter
    grt543http://ke.grferfr34f45ferf.rfr4e.r4f34rf34r.r4f4r.3 https://yandex.ru/turbo?text=https%3A%2F%2Finternet-technologies.ru%2Farticles%2Fuskoryaem-javascript.html
    https://yandex.ru/turbo?text=https%3A%2F%2Finternet-technologies.ru%2Farticles%2Fuskoryaem-javascript.html.. LGFDGFKSDGFKSDKGF
 .2131https://yandex.ru/turbo?text=https%3A%2F%2Finternet-technologies.ru%2Farticles%2Fuskoryaem-javascript.html.pdf.keklol.21!vgdfgvs..Lorem`];
let result = str.join('').match(/(http)s?:\/\/([a-zA-Z0-9]*(\/|\.){0,1}[a-zA-Z0-9]+(\!|\?|\$|\%|\&|\#|\-\_)*)+/g);
console.log(result.join('\n'));