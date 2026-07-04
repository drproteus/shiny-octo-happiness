import $ from "jquery";
import * as THREE from "three";

$(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const loader = new THREE.TextureLoader();
  const texture = loader.load("/images/photo2.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });

  const cubes = []
  const cube = new THREE.Mesh(geometry, material);
  cubes.push(cube);
  scene.add(cube);

  camera.position.z = 5;

  renderer.setAnimationLoop((time) => {
    cubes.forEach((cube, ndx) => {
      cube.rotation.x = time / 2000;
      cube.rotation.y = time / 1000;

    });
    const needResize = canvas.clientWidth !== window.innerWidth || canvas.clientHeight !== window.innerHeight;
    if (needResize) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
  });
});
