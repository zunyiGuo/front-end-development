const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 120
camera.position.x = - 10
camera.lookAt(0, 0, 0)

export default camera
