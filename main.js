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
    0:"-----"
}

button1.addEventListener('click',(event) => {
    const englishInput = document.getElementById('english').value.split("");
    englishInput.forEach(letter => {
    morseCode[letter];
    document.getElementById('output').innerHTML+= morseCode[letter];
 });
 
});