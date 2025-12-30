import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function MaterialModel() {
  const group = useRef();
  const { scene } = useGLTF("/new-model.glb"); // ← your new model here
  const [color, setColor] = useState("#ffffff");
  const [spinSpeed, setSpinSpeed] = useState(0.002);

  // Floating animation + rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += spinSpeed;
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  // Listen for color change event
  useEffect(() => {
    const handler = (e) => {
      setSpinSpeed(0.08); // spin fast
      setColor(e.detail);
      // stabilize after 1 second
      setTimeout(() => setSpinSpeed(0.006), 2000);
    };
    window.addEventListener("changeColor", handler);
    return () => window.removeEventListener("changeColor", handler);
  }, []);

  // Apply color to all meshes
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color);
      }
    });
  }, [color, scene]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.04}         // adjust as needed
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload("/new-model.glb");
