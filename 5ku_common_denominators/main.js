function convertFrac(lst){
let lcd = (a, b) => b ? lcd(b, a % b) : a;
let lcm = lst.reduce((j, i) => j * i[1] / lcd(j, i[1]), 1);
return lst.reduce((j, i) => j + '('+ lcm / i[1] * i[0] +','+ lcm +')', '');
}