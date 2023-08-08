const codeStringPalindrom = () => {
    const codeString = `const isPalindrom = function(s) {
        if(s != 0){
            let arrModify = []
            let arrOrigin = []
            let palindrome = []
            let counter = 0
            s = s.toString();
            s = s.replace(/[\, ]/g,'')
            arrOrigin = s.split('');
            arrOrigin.map((item) => {
                arrModify.push(item)
            })
            palindrome = arrModify.reverse()
            for (let index = 0; index < s.length; index++) {
                if(arrOrigin[index] === palindrome[index]){
                    counter++
                    if(counter == arrOrigin.length - 1){
                        return true
                    }
                }else{
                    return false
                }
            }
        }
        return true
    }`;
    return codeString
}

const CodeString = (option) => {
    let result = ""
    switch (option) {
        case 1:
            result = codeStringPalindrom()
        break;
        default:
            result
        break;
    }
    return result
}

export default CodeString