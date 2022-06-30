/* CURRENTLY WORKING ON CODE */

// 1)
function calculateSum(a, b) {
  if(a === b){
    const sum = a+b
    return 3 * sum
  }
  return a + b
}

console.log(calculateSum(2,3), '2 + 3')
console.log(calculateSum(2 , 2), '2 + 2')


// 2)
function isTheResult50(a, b){
    const sum = a + b 
    if (a===50||b===50){
        return true
    }
    else if (sum===50){
        return true
    }
    else {
        return false
    }
}

console.log(isTheResult50(50 , 12), '50 + 12')
console.log(isTheResult50(20, 30), '20 + 30')
console.log(isTheResult50(2, 3), '2 + 3')


// 3)
function removeCharacter(string, position){
    return string.slice(0, position) + string.slice(position + 1)
}

console.log(removeCharacter('Helloo', 5), 'Hello  5')


// 4)
function checkIfCharacterExists(string, character){
    if (string.charAt(2)==character||string.charAt(3)==character||string.charAt(4)==character){
        return true
    }
    else {
        return false
    }
}

console.log(checkIfCharacterExists('hello world', 'l'), 'hello world   l')


// 5)
function isInteger8(a, b){
    if(a==8||b==8){
        return true
    }
    else if (a+b == 8){
        return true
    }
    else if (Math.abs(a - b)==8){
        return true
    }
    else{
        return false
    }
}

console.log(isInteger8(8, 16), '8, 16')


// 6)
function sortString(string){
    return string.split("").sort().join("");
}

console.log(sortString('acb'), 'acb')


// 7)
function joinStrings(strA, strB){
    return strA.slice(1) + strB.slice(1)
}

console.log(joinStrings('hello', 'hello'), 'hello hello')


// 8)
function isFirstAndLastSame(array){
    if(array[0]=== array[array.length-1]){
        return true
    }
    return false
}

console.log(isFirstAndLastSame([1, 2, 1]), '1 2 1')
console.log(isFirstAndLastSame([1, 2, 3]), '1 2 3')


// 9)
function switchFirstAndLast(string){
    if(string.length>=1){
        return string.charAt(string.length-1) + string.substring(1, string.length - 1) + string.charAt(0)
    }
    return false
}

console.log(switchFirstAndLast('hello'), 'hello')


// 10)
function doesStringStartWith(string){
    if(string.startsWith('Los')||string.startsWith('New')){
        return string
    }
    return ''
}

console.log(doesStringStartWith('Los Angeles'), 'Los Angeles')