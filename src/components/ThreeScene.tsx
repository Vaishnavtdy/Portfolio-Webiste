"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Wireframe Tech Shape Component
function TechShape({
    position,
    geometry,
    color
}: {
    position: [number, number, number];
    geometry: 'box' | 'sphere' | 'torus' | 'octahedron' | 'tetrahedron';
    color: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const edgesRef = useRef<THREE.LineSegments>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
        if (edgesRef.current) {
            edgesRef.current.rotation.x = state.clock.elapsedTime * 0.3;
            edgesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    const geometryComponent = useMemo(() => {
        switch (geometry) {
            case 'box':
                return <boxGeometry args={[1, 1, 1]} />;
            case 'sphere':
                return <sphereGeometry args={[0.6, 16, 16]} />;
            case 'torus':
                return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
            case 'octahedron':
                return <octahedronGeometry args={[0.7]} />;
            case 'tetrahedron':
                return <tetrahedronGeometry args={[0.8]} />;
        }
    }, [geometry]);

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
            <group position={position}>
                {/* Wireframe mesh */}
                <mesh ref={meshRef}>
                    {geometryComponent}
                    <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
                </mesh>
                {/* Glowing edges */}
                <lineSegments ref={edgesRef}>
                    {geometryComponent}
                    <lineBasicMaterial color={color} />
                </lineSegments>
            </group>
        </Float>
    );
}

// Binary/Tech Particles
function TechParticles() {
    const particlesRef = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const count = 200;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const color1 = new THREE.Color("#00d9ff");
        const color2 = new THREE.Color("#8b5cf6");

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

            const mixColor = Math.random() > 0.5 ? color1 : color2;
            colors[i * 3] = mixColor.r;
            colors[i * 3 + 1] = mixColor.g;
            colors[i * 3 + 2] = mixColor.b;
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
            particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

// Circuit Board Lines
function CircuitLines({ lineWidth = 1.5 }: { lineWidth?: number }) {
    const linesRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
        }
    });

    const linePoints = useMemo(() => {
        return [
            [[-3, 2, 0], [-1, 2, 0], [-1, 1, 0]],
            [[3, -2, 0], [1, -2, 0], [1, -1, 0]],
            [[-2, -1, 0], [0, -1, 0], [0, 1, 0]],
            [[2, 1, 0], [0.5, 1, 0], [0.5, -0.5, 0]],
        ];
    }, []);

    return (
        <group ref={linesRef}>
            {linePoints.map((points, i) => (
                <Line
                    key={i}
                    points={points as any}
                    color={i % 2 === 0 ? "#00d9ff" : "#8b5cf6"}
                    lineWidth={lineWidth}
                    transparent
                    opacity={0.4}
                />
            ))}
        </group>
    );
}

// Glowing Nodes (connection points)
function GlowingNodes() {
    const positions: [number, number, number][] = useMemo(() => [
        [-3, 2, 0],
        [3, -2, 0],
        [-2, -1, 0],
        [2, 1, 0],
        [0, 0, 0],
    ], []);

    return (
        <>
            {positions.map((pos, i) => (
                <Float key={i} speed={3} floatIntensity={0.5}>
                    <Sphere args={[0.1, 16, 16]} position={pos}>
                        <meshBasicMaterial color={i % 2 === 0 ? "#00d9ff" : "#8b5cf6"} />
                    </Sphere>
                    {/* Glow effect */}
                    <Sphere args={[0.15, 16, 16]} position={pos}>
                        <meshBasicMaterial
                            color={i % 2 === 0 ? "#00d9ff" : "#8b5cf6"}
                            transparent
                            opacity={0.2}
                        />
                    </Sphere>
                </Float>
            ))}
        </>
    );
}

// Main Scene Component
function Scene() {
    const groupRef = useRef<THREE.Group>(null);
    const [lineWidth, setLineWidth] = useState(1.5);

    useEffect(() => {
        const handleResize = () => {
            // Use smaller line width on mobile devices
            setLineWidth(window.innerWidth < 768 ? 0.5 : 1.5);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Mouse parallax effect
            const x = (state.mouse.x * Math.PI) / 15;
            const y = (state.mouse.y * Math.PI) / 15;

            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                y,
                0.05
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                x,
                0.05
            );
        }
    });

    return (
        <group ref={groupRef}>
            {/* Tech Wireframe Shapes */}
            <TechShape position={[-2.5, 1.5, -1]} geometry="box" color="#00d9ff" />
            <TechShape position={[2.5, -1, -2]} geometry="octahedron" color="#8b5cf6" />
            <TechShape position={[0, 2.5, -1.5]} geometry="tetrahedron" color="#3b82f6" />
            <TechShape position={[-1.5, -1.8, 0.5]} geometry="torus" color="#06b6d4" />
            <TechShape position={[2, 1.2, 0]} geometry="sphere" color="#a855f7" />

            {/* Circuit Lines */}
            <CircuitLines lineWidth={lineWidth} />

            {/* Glowing Connection Nodes */}
            <GlowingNodes />

            {/* Tech Particles */}
            <TechParticles />

            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d9ff" />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#8b5cf6" />
            <pointLight position={[0, 0, 5]} intensity={0.8} color="#3b82f6" />
        </group>
    );
}

// Main ThreeScene Component
export function ThreeScene() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
