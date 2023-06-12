export default class Entity {
    constructor(x, y, height, width, color) {
        this.strength = 1;
        this.health = 100;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.update = function(context) {
            context.fillStyle = this.color
            context.rect(this.x, this.y, 30, 30, color, false);
        }
        this.newPos = function(speed) {
            this.x += speed;
        };
        this.obstacleDetect = function(obj) {
            let left = this.x;
            let right = this.x + (this.radius);
            let top = this.y;
            let bottom = this.y + (this.radius);
            let obsLeft = obj.x
            let obsRight = obj.x + (obj.radius);
            let obsTop = obj.y;
            let obsBottom = obj.y + (obj.radius);
            let crash = true;
            if ((bottom < obsTop) ||
            (top > obsBottom) ||
            (right < obsLeft) ||
            (left > obsRight)) {
                crash = false;
            }
            return crash;
        }
        this.isAlive = function() {
            if (this.health === 0) {
                return false
            } else {
                return true
            }
        }
        this.reduceHealth = function(health) {
            this.health -= health

            if (this.health < 0) {
                this.health = 0
            }
        }
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, 30, 30, this.color, false);
        context.fillStyle = this.color
        context.fill();
        // context.clearRect(this.x, this.y, this.width, this.height);
    }
}