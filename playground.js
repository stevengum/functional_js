
function buildCastles(material) {
    return `Castle made of ${material}`;
}
//function buildCastles' output is solely reliant on its given parameter, which is 'material'.
let brickCastle = buildCastles("brick");
console.log(brickCastle);

//is function climbTowers a higher-order function?
function climbTowers(name) {
    return (castle) => {
        return `${name} has climbed on the ${castle}.`;
    }
}

let johnDoe = climbTowers("John Doe");

console.log(johnDoe(brickCastle));
