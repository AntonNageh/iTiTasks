let message = prompt("Enter the message", "")
var CurrentWord = "",BiggestWord = "";
function Largestword (message) {
    for(let i=0;i < message.length; i++){
        if(message[i] != " "){
            CurrentWord +=message[i]
        }
            else 
            {
                if(CurrentWord.length > BiggestWord.length){
                    BiggestWord = CurrentWord;
                }
                CurrentWord = "";
            }
    }

    if (CurrentWord.length > BiggestWord.length) {
        BiggestWord = CurrentWord;
    }

    return BiggestWord
}
Largestword(message)
document.write(BiggestWord)