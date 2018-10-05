export const binaryToDecimal = (binary) => {
        return typeof binary == 'number' ? parseInt(binary, 2) : null;
};