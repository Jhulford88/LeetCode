/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magArr = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
        let curr = ransomNote[i];
        if (magArr.includes(curr)) {
            magArr.splice(magArr.indexOf(curr), 1)
        } else {
            return false
        }
    }
    return true;
};