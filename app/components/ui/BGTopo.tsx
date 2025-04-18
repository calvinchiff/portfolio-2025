// components/BGTopo.tsx

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BGTopo() {
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | undefined>(undefined);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(
			0,
			window.innerWidth,
			0,
			window.innerHeight,
			1,
			2
		);
		camera.position.z = 2;

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setClearColor(0x2c2c2c, 1);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		rendererRef.current = renderer;
		container.appendChild(renderer.domElement);

		const clock = new THREE.Clock();
		const fg = 0xdcdcdc;

		const geometry = new THREE.PlaneGeometry(
			window.innerWidth,
			window.innerHeight
		);
		geometry.translate(window.innerWidth / 2, window.innerHeight / 2, 0);

		const vertexShader = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

		const snoise = `
    //
    // Description : Array and textureless GLSL 2D/3D/4D simplex 
    //               noise functions.
    //      Author : Ian McEwan, Ashima Arts.
    //  Maintainer : stegu
    //     Lastmod : 20201014 (stegu)
    //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
    //               Distributed under the MIT License. See LICENSE file.
    //               https://github.com/ashima/webgl-noise
    //               https://github.com/stegu/webgl-noise
    // 

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

    vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }

    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;

      i = mod289(i); 
      vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      float n_ = 0.142857142857; 
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }
  `;

		const fragmentShader = `
      uniform vec3 color;
      uniform float time;
      ${snoise}

      void main() {
        float levels = 12.0;
        float noise = snoise(vec3(gl_FragCoord.xy * 0.003, time * 0.012));
        noise = (noise + 1.0) / 2.0;

        float lower = floor(noise * levels) / levels;
        float lowerDiff = noise - lower;

        if (lowerDiff > 0.005)
          discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

		const material = new THREE.ShaderMaterial({
			uniforms: {
				color: { value: new THREE.Color(fg) },
				time: { value: 0 }
			},
			vertexShader,
			fragmentShader,
			side: THREE.BackSide
		});

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const animate = () => {
			requestAnimationFrame(animate);
			material.uniforms.time.value = clock.startTime + clock.getElapsedTime();
			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			camera.right = width;
			camera.bottom = height;
			camera.updateProjectionMatrix();

			geometry.dispose();
			mesh.geometry = new THREE.PlaneGeometry(width, height);
			mesh.geometry.translate(width / 2, height / 2, 0);

			renderer.setSize(width, height);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
			scene.remove(mesh);
			if (renderer.domElement.parentNode) {
				renderer.domElement.parentNode.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 pointer-events-none blur-[2px] md:blur-[4px] bg-black overflow-hidden">
			<div ref={containerRef} />
		</div>
	);
}
