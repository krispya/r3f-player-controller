import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useUpdate, Stages } from '@react-three/fiber';
import { useLayoutEffect } from 'react';
import { useController } from './controller';
import { Level } from './level';
import { PlayerController } from './player-controller';
import { Player } from './player';

function Game() {
  const controller = useController();

  // Start our controller
  useLayoutEffect(() => {
    controller.start();
  }, [controller]);

  // Update the controller on an early loop
  useUpdate(() => {
    controller.update();
  }, Stages.Early);

  return (
    <>
      <Level scale={[2, 2, 2]} position={[0.5, 0, 0]} />
      <PlayerController>
        <Player />
      </PlayerController>

      <ambientLight intensity={1} />
      <Environment preset="apartment" />

      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas shadows gl={{ physicallyBasedLights: true }} camera={{ position: [5, 3, -10], fov: 50 }}>
      <Game />
    </Canvas>
  );
}
