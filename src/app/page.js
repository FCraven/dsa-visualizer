'use client'
import { Stats, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';

export default function Home() {
  const backgroundArray = ["forest"]
  return (
    <div>
      <main id='main-container'>
        <div><p>Hello World</p></div>
        <Canvas camera={{ position: [-0.5, 1, 2] }}>
          <Environment
            preset={`${backgroundArray[0]}`}
            background
            backgroundBlurriness={0.5}
          />
          <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
          <OrbitControls target={[0, 1, 0]} />
          <axesHelper args={[5]} />
        </Canvas>
      </main>
    </div>
  );
}
