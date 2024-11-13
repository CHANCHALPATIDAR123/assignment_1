let str = "neha";
let Uppercase = str.toUpperCase();
console.log(Uppercase);

let str1 = "pooja";
let upper = " ";
for (let i = 0; i < str1.length; i++) {
    const char = str1.charCodeAt(i);
    if (char >= 97 && char <= 122) {
        upper += String.fromCharCode(char - 32);
    }

}
console.log(upper);