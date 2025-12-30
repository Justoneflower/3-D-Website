import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Model({ onReady }) {
  const group = useRef();
  const { scene } = useGLTF("/zee.glb");

  // slow idle rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0039;
    }
  });

  // 🔥 SEND REFERENCES ONCE
  useEffect(() => {
    if (!scene || !onReady) return;

    const centerReel = scene.getObjectByName("CenterReel");
    const cylinder = scene.getObjectByName("Cylinder"); // ⚠️ exact name
    const cube = scene.getObjectByName("Cube");

    onReady({ centerReel, cylinder, cube });
  }, [scene, onReady]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.02}                // ✅ adjust model size
      position={[0, -1.2, 0]}     // ✅ center vertically
      rotation={[0, Math.PI, 0]}  // ✅ front of model faces camera
    />
  );
}

useGLTF.preload("/zee.glb");


