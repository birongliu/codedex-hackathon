'use client'
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene= () => {
    useEffect(() => {
        //Scene
        const scene = new THREE.Scene();
        
        //Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        
        //Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        document.body.appendChild(renderer.domElement);
        
        //Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // enable damping
        controls.dampingFactor = 0.05;


        //Light
        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // Load GLB model
        const loader = new GLTFLoader();
        let model;
        loader.load(
            '/model.glb', 
            (gltf) => {
                model = gltf.scene;
                scene.add(model);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        // Animation
        const animate = function () {
            requestAnimationFrame(animate);
            controls.update(); // Update controls with damping
            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize((window.innerWidth) / 5, (window.innerHeight) / 5);
        });

        // Clean up
        return () => {
            document.body.removeChild(renderer.domElement);
        };
}, []);

return null;

};

export default ThreeScene;



