// components/ThreeScene.js
'use client';

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './ThreeScene.module.css';

const ThreeScene = () => {
  useEffect(() => {
    const container = document.getElementById('threejs-container');

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    renderer.domElement.className = styles.canvas; // Apply the canvas class
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.05;

    // Light
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Initial model state
    const initialState = {
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0.3, Math.PI / 4, 0), // Adjust as needed
        scale: new THREE.Vector3(1.5, 1.5, 1.5), // Adjust as needed
    };

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      '/model.glb', // Path to your model file
      (gltf) => {
        const model = gltf.scene;

        // Set initial state
        model.position.copy(initialState.position);
        model.rotation.copy(initialState.rotation);
        model.scale.copy(initialState.scale);

        scene.add(model);
        model.position.set(0, 0, 0);

        // Assuming 'model' is your 3D model object
        function adjustModelScale() {
            const scale = window.innerWidth < 1666 ? 0.5 : 1; // Smaller scale for smaller screens
            model.scale.set(scale, scale, scale);
        }
  
        window.addEventListener('resize', adjustModelScale);
        adjustModelScale();
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Scroll handling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      controls.enabled = false;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        controls.enabled = true;
      }, 150);
    });

    // Touch handling
    let isTouchMove = false;

    window.addEventListener('touchstart', () => {
      isTouchMove = false;
    });

    window.addEventListener('touchmove', () => {
      isTouchMove = true;
    });

    window.addEventListener('touchend', () => {
      if (isTouchMove) {
        controls.enabled = false;
      } else {
        controls.enabled = true;
      }
    });

    // Cleanup on unmount
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="threejs-container" className={styles.container}></div>;
};

export default ThreeScene;
