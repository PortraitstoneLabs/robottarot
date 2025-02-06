/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/Robot_Tarot_Text_03.glb";

export function Robot_Tarot_Text_03({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-2.192, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text035"
            castShadow
            receiveShadow
            geometry={nodes.Text035.geometry}
            material={nodes.Text035.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone} />
        </group>
        <group name="Armature001" position={[-1.632, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text030"
            castShadow
            receiveShadow
            geometry={nodes.Text030.geometry}
            material={nodes.Text030.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_1} />
        </group>
        <group name="Armature002" position={[-1.139, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text028"
            castShadow
            receiveShadow
            geometry={nodes.Text028.geometry}
            material={nodes.Text028.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_2} />
        </group>
        <group name="Armature003" position={[-0.634, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text024"
            castShadow
            receiveShadow
            geometry={nodes.Text024.geometry}
            material={nodes.Text024.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_3} />
        </group>
        <group name="Armature004" position={[-0.173, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text018"
            castShadow
            receiveShadow
            geometry={nodes.Text018.geometry}
            material={nodes.Text018.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_4} />
        </group>
        <group name="Armature005" position={[0.273, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text015"
            castShadow
            receiveShadow
            geometry={nodes.Text015.geometry}
            material={nodes.Text015.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_5} />
        </group>
        <group name="Armature007" position={[1.253, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text009"
            castShadow
            receiveShadow
            geometry={nodes.Text009.geometry}
            material={nodes.Text009.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_6} />
        </group>
        <group name="Armature008" position={[1.8, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text005"
            castShadow
            receiveShadow
            geometry={nodes.Text005.geometry}
            material={nodes.Text005.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_7} />
        </group>
        <group name="Armature009" position={[2.261, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text002"
            castShadow
            receiveShadow
            geometry={nodes.Text002.geometry}
            material={nodes.Text002.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_8} />
        </group>
        <group name="Armature006" position={[0.729, -1, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="Text013"
            castShadow
            receiveShadow
            geometry={nodes.Text013.geometry}
            material={nodes.Text013.material}
            position={[0, -1, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <primitive object={nodes.Bone_9} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(scene);