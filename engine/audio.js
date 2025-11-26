class AudioManager {
  constructor(camera) {
    this.listener = new THREE.AudioListener();
    camera.add(this.listener);

    this.loader = new THREE.AudioLoader();
  }

  createAmbient(path, volume = 0.6) {
    return new Promise((resolve) => {
      const audio = new THREE.Audio(this.listener);
      this.loader.load(path, (buffer) => {
        audio.setBuffer(buffer);
        audio.setLoop(true);
        audio.setVolume(volume);
        resolve(audio);
      });
    });
  }
}

async function spawnEnvMusic(audioManager, path, map) {
  const ent = createEntity();
  const comp = { type: "env_music" };

  comp.sound = await audioManager.createAmbient(path, 0.55);
  comp.sound.play();

  addComponent(ent, "env_music", comp);
  map.set(ent.id, ent);
}
