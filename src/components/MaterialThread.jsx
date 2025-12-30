// MaterialThread.jsx
import { useRef, useMemo, useEffect } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function MaterialThread({ color = "#000000" }) {
  const lineRef = useRef();

  // Full-width smooth abstract curve
  const points = useMemo(() => {
    const curvePoints = [];
    const width = 8;        // controls horizontal stretch
    const segments = 80;   // higher = smoother

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = THREE.MathUtils.lerp(-width, width, t);
      const y = Math.sin(t * Math.PI * 4) * 0.45;
      const z = Math.cos(t * Math.PI * 1.5) * 0.15;

      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    return curvePoints;
  }, []);

  // Listen for color changes
  useEffect(() => {
    const handler = (e) => {
      if (lineRef.current) {
        lineRef.current.material.color.set(e.detail);
      }
    };
    window.addEventListener("changeColor", handler);
    return () => window.removeEventListener("changeColor", handler);
  }, []);

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={4}        // clean, elegant thickness
      transparent
      opacity={0.9}
      dashed={false}
    />
  );
}

