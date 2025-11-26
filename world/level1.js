async function loadLevel(engine, audioManager) {
  engine.scene.background = new THREE.Color(0x0e0f12);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 3);
  engine.scene.add(light);

  // Ground
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ roughness: 0.9 })
  );
  floor.rotation.x = -Math.PI / 2;
  engine.scene.add(floor);

  // Cube
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x77ccff })
  );
  box.position.y = 1;
  engine.scene.add(box);

  // Music
  await spawnEnvMusic(audioManager, "assets/audio/ending_triumph.wav", engine.entities);
}
