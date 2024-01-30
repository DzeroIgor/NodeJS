module.exports.filterNumbers = (array) => {
    return array.filter(item => !isNaN(item));
}