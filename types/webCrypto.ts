import CryptoJS from "crypto-js";

const SECRET_KEY = ""; // Replace with a secure key

export const encryptData = (data:any) => {
    try {
        return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    } catch (error) {
        console.error("Error encrypting data:", error);
        return null;
    }
};

export const decryptData = (cipherText:any) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error("Error decrypting data:", error);
        return null;
    }
};