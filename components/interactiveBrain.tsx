'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Text } from '@react-three/drei'
import * as THREE from 'three'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Add interface for brain part
interface BrainPart {
  name: string;
  color: number;
  position: [number, number, number];
  scale: [number, number, number];
  info: string;
}

const brainParts: BrainPart[] = [
  {
    name: 'Frontal Lobe',
    color: 0x000000,
    position: [0, 2.5, 0.5],
    scale: [0.2, 0.2, 0.2],
    info: 'Controls executive functions, personality, behavior, emotional regulation, planning, problem-solving, and voluntary movement.'
  },
  {
    name: 'Prefrontal Cortex',
    color: 0x000000,
    position: [0, 2.3, 2],
    scale: [0.2, 0.2, 0.2],
    info: 'Handles complex cognitive behaviors, personality expression, decision making, and social behavior.'
  },
  {
    name: 'Temporal Lobe',
    color: 0x000000,
    position: [2.5, 0, 0],
    scale: [0.2, 0.2, 0.2],
    info: 'Processes auditory information, manages memory formation, and helps recognize objects and faces.'
  },
  {
    name: 'Hippocampus',
    color: 0x000000,
    position: [2.2, -0.3, 0.2],
    scale: [0.2, 0.2, 0.2],
    info: 'Critical for learning and memory formation, especially long-term memory.'
  },
  {
    name: 'Parietal Lobe',
    color: 0x000000,
    position: [0, 0.5, -0.8],
    scale: [0.2, 0.2, 0.2],
    info: 'Processes sensory information, spatial awareness, and navigation.'
  },
  {
    name: 'Occipital Lobe',
    color: 0x000000,
    position: [-0.8, 0, -1],
    scale: [0.2, 0.2, 0.2],
    info: 'Visual processing center, interprets what we see.'
  },
  {
    name: 'Cerebellum',
    color: 0x000000,
    position: [-0.3, -1.2, -0.8],
    scale: [0.2, 0.2, 0.2],
    info: 'Coordinates movement, balance, and motor learning.'
  },
  {
    name: 'Brain Stem',
    color: 0x000000,
    position: [0, -1.5, -0.3],
    scale: [0.2, 0.2, 0.2],
    info: 'Controls basic life functions like breathing, heart rate, blood pressure, and consciousness.'
  },
  {
    name: 'Amygdala',
    color: 0x000000,
    position: [1.8, -0.5, 0.3],
    scale: [0.2, 0.2, 0.2],
    info: 'Processes emotions, especially fear and pleasure responses.'
  },
  {
    name: 'Thalamus',
    color: 0x000000,
    position: [0, -0.2, 0],
    scale: [0.2, 0.2, 0.2],
    info: 'Relays sensory and motor signals to the cerebral cortex.'
  },
  {
    name: 'Hypothalamus',
    color: 0x000000,
    position: [0, -0.6, 0.2],
    scale: [0.2, 0.2, 0.2],
    info: 'Regulates hormone production, temperature, hunger, thirst, and sleep cycles.'
  },
  {
    name: 'Corpus Callosum',
    color: 0x000000,
    position: [0, 0.3, 0],
    scale: [0.2, 0.2, 0.2],
    info: 'Connects left and right hemispheres, allowing them to communicate.'
  }
];

function BrainModel() {
  const { scene } = useGLTF('model/brain.glb')

  return <primitive object={scene} position={[1, -1, 0]} scale={[1, 1, 1]} />
}

// Add props interface for BrainPart component
interface BrainPartProps {
  part: BrainPart;
  setHovered: (part: BrainPart | null) => void;
  setSelected: (part: BrainPart) => void;
}

const BrainPart: React.FC<BrainPartProps> = ({ part, setHovered, setSelected }) => {
  const textRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree()
  const [hovered, setHoveredLocal] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setSelected(part)
    setClicked(!clicked)
  }

  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position)
    }
  })

  return (
    <group
      position={part.position}
      onClick={handleClick}
      onPointerOver={() => {
        setHoveredLocal(true)
        setHovered(part)
      }}
      onPointerOut={() => {
        setHoveredLocal(false)
        setHovered(null)
      }}
    >
      <Text
        ref={textRef}
        fontSize={0.2}
        color={hovered || clicked ? '#0000ff' : '#000000'}
        anchorX="center"
        anchorY="middle"
      >
        {part.name}
      </Text>
    </group>
  )
}


function Scene({ setHovered, setSelected }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(7, 2, 7)
  }, [camera])

  return (
    <>
      <BrainModel />
      {brainParts.map((part, index) => (
        <BrainPart key={index} part={part} setHovered={setHovered} setSelected={setSelected} />
      ))}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      <OrbitControls enablePan={false} />
    </>
  )
}

// Add props interface for InfoModal component
interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  part: BrainPart | null;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, part }) => {
  if (!part) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{part.name}</DialogTitle>
          <DialogDescription>{part.info}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const InteractiveBrainModel: React.FC = () => {
  const [hovered, setHovered] = useState<BrainPart | null>(null);
  const [selected, setSelected] = useState<BrainPart | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePartClick = (part: BrainPart) => {
    setSelected(part);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-[600px] relative">
      <Canvas shadows>
        <Scene setHovered={setHovered} setSelected={handlePartClick} />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-75 text-pink-700 p-4 text-center">
        {hovered ? (
          <p>{hovered.name}</p>
        ) : (
          <p>Hover over or click brain regions to learn more</p>
        )}
      </div>
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} part={selected} />
    </div>
  )
}

export default InteractiveBrainModel;

