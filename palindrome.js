function checkPalindrome(string) {
    var len = string.length;
    for (let i = 0; i < len / 2; i++) {

        if(string.length <= 10){
            console.log("You have Entered Less Character");
        }
       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }

    }
    return 'It is a palindrome';

    
}

const string = prompt('Enter a string: ');

const value = checkPalindrome(string);


console.log(value);
