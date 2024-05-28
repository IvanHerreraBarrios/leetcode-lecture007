/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const moves = {
    "up": {x:0, y:1},
    "down": {x:0, y:-1},
    "right": {x:1, y:0},
    "left": {x:-1, y:0}
}

var robotSim = function(commands, obstacles) {
let x = 0, y = 0
let dir = "up"
let max = 0

for(let i=0; i <commands.length; i++){
    const command = commands[i]
    if (command === -1) dir = turnRight(dir)
    else if (command === -2) dir = turnLeft(dir)
    else  {
        for(let j=0; j<command;j++){
            const move = moves[dir]
            if (!hasObstacle(obstacles, x + move.x, y + move.y)){
                x += move.x
                y += move.y

                const dist = Math.abs(x)**2 + Math.abs(y)**2
                if (dist > max) max = dist
            }
        }
    }
}
return max
};

function hasObstacle(obstacles,x,y){
for(let i=0; i < obstacles.length; i++){
    const obs = obstacles[i]
    if (x === obs[0] && y===obs[1]) return true
}
return false
}
function turnLeft(dir){
if(dir === "up") return "left"
else if(dir === "right") return "up"
else if(dir === "down") return "right"
else return "down"
}

function turnRight(dir){
if(dir === "up") return "right"
else if(dir === "right") return "down"
else if(dir === "down") return "left"
else return "up"
}