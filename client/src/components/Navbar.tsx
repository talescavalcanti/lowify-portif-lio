import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const glassRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const glass = glassRef.current;
        if (!wrap || !glass) return;

        const logoEl = wrap.querySelector<HTMLElement>('.navbar-logo');
        const linksEl = wrap.querySelector<HTMLElement>('.navbar-links');
        const ctaEl = wrap.querySelector<HTMLElement>('.navbar-cta');
        if (!logoEl || !linksEl || !ctaEl) return;

        const PAD = 14;

        const positionGlass = () => {
            const linksW = linksEl.getBoundingClientRect().width;
            const wrapRect = wrap.getBoundingClientRect();
            const linksRect = linksEl.getBoundingClientRect();
            const linksLeftOffset = linksRect.left - wrapRect.left;

            gsap.set(glass, {
                width: linksW + PAD * 2,
                left: linksLeftOffset - PAD,
                transform: 'none',
            });
        };

        const setupScrollAnimations = () => {
            const logoW = logoEl.getBoundingClientRect().width;
            const linksW = linksEl.getBoundingClientRect().width;
            const ctaW = ctaEl.getBoundingClientRect().width;

            const compactWidth = logoW + linksW + ctaW + 24 + 24 + 40;

            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.set([wrap, glass], { clearProps: "all" });

            positionGlass();

            const scrollConfig = {
                trigger: document.documentElement,
                start: 'top top',
                end: '+=400',
                scrub: 2.5,
            };

            gsap.to(wrap, {
                maxWidth: compactWidth,
                ease: 'power2.out',
                scrollTrigger: scrollConfig,
            });

            gsap.to(glass, {
                width: '100%',
                left: 0,
                ease: 'power2.out',
                scrollTrigger: scrollConfig,
            });
        };

        const frame = requestAnimationFrame(() => {
            setupScrollAnimations();
        });

        const ro = new ResizeObserver(() => {
            setupScrollAnimations();
        });
        ro.observe(wrap);

        return () => {
            cancelAnimationFrame(frame);
            ro.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="navbar-outer">
            <div ref={wrapRef} className="navbar-pill-wrap">
                {/* Glass background — starts compact on links, expands to full */}
                <div ref={glassRef} className="navbar-glass" />

                <a href="/" className="navbar-logo">
                    <img src="/images/lowify-white-logo-DR9-6ezs.png" alt="Lowify" />
                </a>

                <nav className="navbar-links">
                    <a href="#features">Recursos</a>
                    <a href="#showcase">Benefícios</a>
                    <a href="#awards">Premiações</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <a href="#trial" className="navbar-cta">
                    Comece Agora
                </a>
            </div>
        </div>
    );
};

export default Navbar;
