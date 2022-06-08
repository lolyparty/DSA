/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
        const morseCode = {
            'a':".-",
            'b':"-...",
            'c':"-.-.",
            'd':"-..",
            'e':".",
            'f':"..-.",
            'g':"--.",
            'h':"....",
            'i':"..",
            'j':".---",
            'k':"-.-",
            'l':".-..",
            'm':"--",
            'n':"-.",
            'o':"---",
            'p':".--.",
            'q':"--.-",
            'r':".-.",
            's':"...",
            't':"-",
            'u':"..-",
            'v':"...-",
            'w':".--",
            'x':"-..-",
            'y':"-.--",
            'z':"--.."   
        }
        
        let wordMorseCode = ''
        let wordMorseCodeArr = []
        
        for (let i = 0; i < words.length; i++){
            let curWord = words[i].split('')
            for(let j = 0; j < curWord.length; j++){
                wordMorseCode = `${wordMorseCode}${morseCode[curWord[j]]}`
                // wordMorseCode = wordMorseCode.trim()
            }
            if(wordMorseCodeArr.indexOf(wordMorseCode) === -1){
                    wordMorseCodeArr.push(wordMorseCode)
                }
            wordMorseCode = ''            
        }
        return wordMorseCodeArr.length
    }