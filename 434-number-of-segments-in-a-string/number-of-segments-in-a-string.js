/**
 * @param {string} s
 * @return {number}
 */

let countSegments = s => s.split(" ").filter(s => s.trim().length).length;