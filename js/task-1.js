// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug,
// створений із цього рядка.
//    - Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//    - Усі символи slug повинні бути в нижньому регістрі.
//    - Усі слова slug повинні бути розділені тире.

console.log("===== task-1 =====");

function slugify(title) {
  //   console.log("title is -", title);

  const slug = title.toLowerCase().split(" ").join("-");
  //   console.log(title.toLowerCase());
  //   console.log(title.toLowerCase().split(" "));
  //   console.log(slug);
  return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
console.log("==================");
