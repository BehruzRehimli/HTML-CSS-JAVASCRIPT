let arr=[5,9,6,1,-3,7,8,2,]

function min(arr){
    if(Array.isArray(arr)){
        let min = arr[0];
        for (let index = 1; index < arr.length; index++) {
            if(arr[index]<min){
                min=arr[index]
            }
        }
        return min;
    }

}


let str='salminanilla'

function hasSameChar(str) {
    if (typeof str=='string') {
        let arr=[];
        for (let x = 0; x < str.length; x++) {
            for (let y = x+1; y < str.length; y++) {
                if (str[x]==str[y] && arr.includes(str[x])==false) {
                    arr.push(str[x]);
                }
            }
        }
        return arr;
    }
}

let sentence = "lorem"

function howMuchWords(sentence) {
    if(typeof str== 'string'&& sentence.includes(' ')){
        let counter=1;
        for (let index = 0; index < sentence.length; index++) {
            if(sentence[index]==' '){
                counter++;
            }            
        }
        return counter;
    }
}
console.log(howMuchWords(sentence));

let palindrome="a"
function isPalindrome(palindrome){
    if (typeof palindrome=='string' && palindrome.length>1) {
        for (let index = 0; index < (palindrome.length/2); index++) {
            if (palindrome[index]!=palindrome[palindrome.length-index-1]) {
                alert('Polindrome deyil!')
                return;
            }
        }
        alert('Polidromdur.')
    }
    else{
        alert('Parametr olaraq söz ötürülməyib.')
    }   
}
isPalindrome(palindrome)


