import 'babylonjs-loaders';
import { Game } from './game';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const game = new Game(canvas);
  game.start();
});

['keydown', 'click', 'ontouchstart'].forEach(evt =>
  window.addEventListener(evt, () => {
    document.body.classList.remove('gray');
  })
);
