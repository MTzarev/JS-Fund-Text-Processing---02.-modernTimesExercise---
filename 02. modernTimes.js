function modernTimes(array) {
    let words = array.split(' ');
    let specialWords = [];

    for (let word of words) {
        // Check if the word starts with '#' and contains only letters
        if (word.startsWith('#') && /^[a-zA-Z]+$/.test(word.substring(1))) {
            specialWords.push(word.substring(1));
        }
    }

    // Print the special words without the '#' label on a new line
    console.log(specialWords.join('\n'));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
//modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');