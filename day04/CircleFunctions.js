function circumference(radius = 0) {
    return 2 * Math.PI * radius;
}

function area(radius = 0) {
    return Math.PI * radius * radius;
}

//export function so they can be used in other files
module.exports = { circumference, area };