const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
import Entity from './Entity.mjs';

const player = new Entity(400, 500, 30, 'red');


function Initialize() {
    console.log('game started');
    c.clearRect(0, 0, canvas.width, canvas.height);

    const pr = player.radius;
    const px = player.x;
    const py = player.y;

    player.draw();
    player.newPos();
}

Initialize();

export { c, canvas };

