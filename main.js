// 1. Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// 2. The "Fajir" Object (رجعنا الشكل الأول اللي عجبك)
const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 40;

// 3. Animation & Interactivity
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function animate() {
    requestAnimationFrame(animate);

    // دوران تلقائي
    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.003;

    // تفاعل مع الماوس بنعومة
    torusKnot.rotation.x += mouseY * 0.5;
    torusKnot.rotation.y += mouseX * 0.5;

    renderer.render(scene, camera);
}
animate();

// 4. Scroll Effect
window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    torusKnot.position.y = scrollVal * 0.05;
    torusKnot.rotation.z = scrollVal * 0.002;
});

// 5. Responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
