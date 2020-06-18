const morseCode = {
    a:".-",
    b:"-...",
    c:"-.-.",
    d:"-..",
    e:".",
    f:"..-.",
    g:"--.",
    h:"....",
    i:"..",
    j:".---",
    k:"-.-",
    l:".-..",
    m:"--",
    n:"-.",
    o:"---",
    p:".--.",
    q:"--.-",
    r:".-.",
    s:"...",
    t:"-",
    u:"..-",
    v:"...-",
    w:".--",
    x:"-..-",
    y:"-.--",
    z:"--..",
    1:".---",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----.",
    0:"-----",
    " ":" "  // handles spaces input by the user, puts a space in the morse code
}

button1.addEventListener('click',(event) => {
    document.getElementById('output').innerHTML= " "; // refreshes the output box first
    const englishInput = document.getElementById('english').value.split("");
    englishInput.forEach(letter => {
        letter = letter.toLowerCase(); // puts each letter into lowercase
        morseCode[letter];
    document.getElementById('output').innerHTML+= morseCode[letter];
 });
 
});