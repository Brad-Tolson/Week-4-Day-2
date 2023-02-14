// function makeUnique(str) {
//     let unique = '';
//     for (let i = 0; i < str.length; i++) {
//       if (unique.indexOf(str[i]) === -1) {
//         unique += str[i];
//       }
//     }
//     return unique;
//   }

//   console.log(makeUnique('iwanttogototacobell'))

const makeUnique = str => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if(!newStr.includes(str[i])){
            newStr += str[i]
        }
    }

    return newStr
}

console.log(makeUnique('iwanttogototacobell'))