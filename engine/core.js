class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 5);

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setSize(innerWidth, innerHeight);

    this.lastTime = performance.now();
    this.entities = new Map();
    this.systems = [];

    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  }

  addSystem(sys) { this.systems.push(sys); }

  start() {
    const loop = (t) => {
      const dt = (t - this.lastTime) / 1000;
      this.lastTime = t;

      for (const sys of this.systems) sys.update(dt);

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}
