function slugify(title){
    const titArr = title.toLowerCase().split(" ");
    const slug = titArr.join("-");
    return slug;
}

console.log(slugify("Arrays for Beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));