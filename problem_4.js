// Problem - 4

// ------- Caesar's Cipher -------
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

// Examples
// caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

// caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
// ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

// caesarCipher("A friend in need is a friend indeed", 20)
// ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
// Notes
// All test input will be a valid ASCII string.


function caesarCipher(s, k) {
    let arr = [];
    // console.log(s.length);
	for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if(/^[a-zA-Z]$/.test(s[i]))
        {
            let charCode = s[i].charCodeAt(0)
            // console.log(charCode);
            let shiftedCharCode = charCode + k;
            // console.log(shiftedCharCode);
            
            const isUppercase = s[i] === s[i].toUpperCase();

            // Calculate the new character code, considering wrapping around the alphabet
            const newCharCode = (shiftedCharCode - (isUppercase ? 65 : 97)) % 26 + (isUppercase ? 65 : 97);

            // Convert the new character code back to a character
            arr.push(String.fromCharCode(newCharCode));

        }
        else
        {
            arr.push(s[i]);
        }
    }
    return arr.join("");
}

console.log(caesarCipher("middle-Outz", 2));