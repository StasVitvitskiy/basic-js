class VigenereCipheringMachine {
    constructor (flag){
        this.reverse = flag === false;
    }
    alphabet = {
        A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15,
        Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
    };
    alphabet2 = {
        0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P",
        16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z"
    };
    encrypt(message, key) {
        if(message === undefined || key === undefined) {
            throw new Error;
        }
        let msgUpper = message.toUpperCase();
        let keyUpper = key.toUpperCase();
        let longKey = this.generateKey(msgUpper, keyUpper);
        let encrypted = "";
        for(let i = 0, j = 0; i < msgUpper.length; i++) {
            if(this.alphabet[msgUpper[i]] === undefined) {
                encrypted += msgUpper[i];
            } else {
                encrypted += this.alphabet2[((this.alphabet[msgUpper[i]] + this.alphabet[longKey[j]]) % 26)];
                j++;
            }
        }
        if(this.reverse === true) {
            return encrypted.split("").reverse().join("");
        } else {
            return encrypted;
        }
    }
    generateKey(text,key) {
        return key.padEnd(text.replace(/s+/g, "").length, key);
    }
    decrypt(encryptedMessage, key) {
        if(encryptedMessage === undefined || key === undefined) {
            throw new Error;
        }
        let keyUpper = key.toUpperCase();
        let longKey = this.generateKey(encryptedMessage, keyUpper);
        let decrypted = "";
        for(let i = 0, j = 0; i < encryptedMessage.length; i++) {
            if(this.alphabet[encryptedMessage[i]] === undefined) {
                decrypted += encryptedMessage[i];
            } else {
                decrypted +=  this.alphabet2[
                    (this.alphabet[encryptedMessage[i]] - this.alphabet[longKey[j]] + 26) % 26
                ];
                j++;
            }
        }
        if(this.reverse === true) {
            return decrypted.split("").reverse().join("");
        } else {
            return decrypted;
        }
    }
}

module.exports = VigenereCipheringMachine;
