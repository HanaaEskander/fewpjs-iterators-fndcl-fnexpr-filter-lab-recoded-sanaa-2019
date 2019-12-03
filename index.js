// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(avaliable => data.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(drivers, string) {
    return drivers.filter(data => data.startsWith(string));
}
function matchName(drivers, string) {
    return drivers.filter(data => data.name === string);
}
