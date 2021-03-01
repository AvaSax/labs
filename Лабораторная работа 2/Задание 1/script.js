let table = [];
for (let i = 0; i < 10; i++) 
{
    let row = [];
    for (let j = 0; j < 10; j++) 
    {
        row[j] = i * j;
    }
    table[i] = row;
}
let a = prompt("Первое число (0-9):");
let b = prompt("Второе число (0-9):");
alert("Ответ: " + table[a][b]);