"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    // On mobile: no rotation, no scale change — just show the image flat
    const rotate = useTransform(scrollYProgress, [0, 0.5], isMobile ? [0, 0] : [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [0.9, 1]);
    const translate = useTransform(scrollYProgress, [0, 0.5], isMobile ? [0, 0] : [0, -40]);

    return (
        <div
            style={{ minHeight: isMobile ? "auto" : "60vh" }}
            className="flex items-start justify-center relative p-2 md:p-10"
            ref={containerRef}
        >
            <div
                className="w-full relative"
                style={{
                    perspective: isMobile ? "none" : "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card rotate={rotate} translate={translate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: "1400px"
            }}
            className="shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-2xl"
        >
            <div className="w-full h-auto overflow-hidden rounded-2xl" style={{ margin: "0 auto", textAlign: "center" }}>
                {children}
            </div>
        </motion.div>
    );
};
