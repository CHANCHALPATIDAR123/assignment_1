let str1 = "chanchal";
let str2 = " ";
for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1.charAt(i);
}
if (str1 === str2) {
    console.log("string is palimdrom");
}
else {
    console.log("string is not palimdrom");
}