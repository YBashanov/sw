export const getNumberByLongString = (longString: string): string => {
    if (longString) {
        const numberPattern = /\d+/g;
        const result = longString.match(numberPattern);

        if (result) {
            return result[0];
        }
    }
    return '';
};
