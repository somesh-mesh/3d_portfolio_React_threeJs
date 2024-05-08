import React from 'react'
import planeScene from '../assets/3d/plane.glb'

const Plane = () => {
    const {scene,animations} = useGLTF(planeScene);
  return (
    <mesh>
        <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Plane