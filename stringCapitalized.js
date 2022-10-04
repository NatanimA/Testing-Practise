
const stringCapitalized = (string) => {
    const capitalizedString = string.charAt(0).toUpperCase()+ string.slice(1);
    return capitalizedString;

}

module.exports = {stringCapitalized}