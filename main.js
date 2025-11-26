// Engine bootstrap
const canvas = document.getElementById('c');
const engine = new Engine(canvas);
const audioManager = new AudioManager(engine.camera);

loadLevel(engine, audioManager);
engine.start();
