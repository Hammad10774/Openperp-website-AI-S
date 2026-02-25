import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roboFrames } from './roboFramesList';

gsap.registerPlugin(ScrollTrigger);

const RoboAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useLayoutEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        if (!roboFrames || roboFrames.length === 0) {
            console.error("RoboAnimation: roboFrames is empty or undefined.");
            return;
        }

        const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount === roboFrames.length) {
                console.log("RoboAnimation: All frames loaded successfully.");
                setIsLoaded(true);
            }
        };

        roboFrames.forEach((frame) => {
            const img = new Image();
            img.src = `/robo/${frame}`;
            img.onload = checkAllLoaded;
            img.onerror = () => {
                console.error(`RoboAnimation: Failed to load ${frame}`);
                checkAllLoaded();
            };
            images.push(img);
        });

        imagesRef.current = images;

        return () => {
            images.forEach(img => {
                img.onload = null;
                img.onerror = null;
            });
        };
    }, []);

    useLayoutEffect(() => {
        if (!isLoaded || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        const render = (index: number) => {
            try {
                let i = Math.floor(index);
                if (i < 0) i = 0;
                if (i >= roboFrames.length) i = roboFrames.length - 1;

                const img = imagesRef.current[i];
                if (img && img.complete && img.naturalWidth > 0) {
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;

                    const scale = canvasHeight / imgHeight;
                    const drawWidth = imgWidth * scale;
                    const drawHeight = canvasHeight;

                    const x = -(drawWidth * 0.1);
                    const y = 0;

                    context.clearRect(0, 0, canvasWidth, canvasHeight);
                    context.drawImage(img, x, y, drawWidth, drawHeight);
                }
            } catch (err) {
                console.error("RoboAnimation Render Error:", err);
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(0);
        };

        window.addEventListener('resize', resize);
        resize();

        // GSAP context for better cleanup
        const ctx = gsap.context(() => {
            const frameObj = { frame: 0 };
            gsap.to(frameObj, {
                frame: roboFrames.length - 1,
                ease: "none",
                scrollTrigger: {
                    scrub: 0.1,
                    trigger: "html", // Use string selector for safety
                    start: "top top",
                    end: "bottom bottom",
                },
                onUpdate: () => render(frameObj.frame)
            });
        });

        return () => {
            window.removeEventListener('resize', resize);
            ctx.revert();
            // Clean up any remaining ScrollTriggers
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [isLoaded]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen', backgroundColor: 'transparent' }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ opacity: 0.5, filter: 'blur(1px)' }}
            />
        </div>
    );
};

export default RoboAnimation;
