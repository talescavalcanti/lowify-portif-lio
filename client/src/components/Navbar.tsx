import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartoonButton } from './ui/cartoon-button';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 768;

const Navbar: React.FC = () => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const glassRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleNavLinkClick = () => setMenuOpen(false);

    useLayoutEffect(() => {
        const wrap = wrapRef.current;
        const glass = glassRef.current;
        if (!wrap || !glass) return;

        // On mobile: skip all GSAP animations. Just show navbar simply.
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            gsap.set(glass, { width: '100%', left: 0, transform: 'none' });
            gsap.set(wrap.parentElement, { autoAlpha: 1 });
            gsap.set(wrap, { autoAlpha: 1 });
            return;
        }

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
                scrub: 2.2,
            };

            gsap.to(wrap, {
                maxWidth: compactWidth,
                ease: 'none',
                scrollTrigger: scrollConfig,
            });

            gsap.to(glass, {
                width: '100%',
                left: 0,
                ease: 'none',
                scrollTrigger: scrollConfig,
            });
        };

        const setupEntranceAnimation = () => {
            gsap.set(wrap, { y: -100, autoAlpha: 0, filter: 'blur(10px)' });
            gsap.set(glass, { scaleX: 0, autoAlpha: 0 });
            gsap.set([logoEl, ctaEl], { autoAlpha: 0 });
            gsap.set(linksEl.querySelectorAll('a'), { y: 15, autoAlpha: 0 });

            const tl = gsap.timeline({
                delay: 0.3,
                defaults: { ease: 'expo.out', duration: 1.2 },
                onComplete: () => {
                    ro.observe(wrap);
                    ScrollTrigger.refresh();
                }
            });

            gsap.set(wrap.parentElement, { autoAlpha: 1 });

            tl.to(wrap, {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: 1.8,
                ease: 'power4.out'
            })
            .to(glass, {
                scaleX: 1,
                autoAlpha: 1,
                duration: 1.6,
                ease: 'elastic.out(1, 0.85)',
                transformOrigin: 'center center',
            }, "-=1.4")
            .to(logoEl, {
                x: 0,
                autoAlpha: 1,
                duration: 1,
            }, "-=1.2")
            .to(ctaEl, {
                x: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 1,
            }, "-=1.2")
            .to(linksEl.querySelectorAll('a'), {
                y: 0,
                autoAlpha: 1,
                stagger: 0.04,
                duration: 0.8,
            }, "-=1.0");

            return tl;
        };

        const ro = new ResizeObserver(() => {
            if (window.innerWidth > MOBILE_BREAKPOINT) {
                setupScrollAnimations();
            }
        });

        setupScrollAnimations();
        setupEntranceAnimation();

        return () => {
            ro.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
            <div className="navbar-outer" style={isMobile ? {} : { opacity: 0, visibility: 'hidden' }}>
                <div ref={wrapRef} className="navbar-pill-wrap">
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

                    {isMobile ? (
                        <button
                            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Abrir menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    ) : (
                        <CartoonButton
                            label="Começar Grátis"
                            href="#trial"
                            color="bg-[#ffffff]"
                            hasHighlight={false}
                            className="!h-12 !px-6 !text-black !text-xl"
                            containerClassName="navbar-cta"
                        />
                    )}
                </div>
            </div>

            {/* Mobile drawer */}
            <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
            <nav className={`mobile-menu-drawer ${menuOpen ? 'open' : ''}`}>
                <a href="#features" onClick={handleNavLinkClick}>Recursos</a>
                <a href="#showcase" onClick={handleNavLinkClick}>Benefícios</a>
                <a href="#awards" onClick={handleNavLinkClick}>Premiações</a>
                <a href="#faq" onClick={handleNavLinkClick}>FAQ</a>
                <CartoonButton
                    label="Começar Grátis"
                    href="#trial"
                    color="bg-[#ffffff]"
                    hasHighlight={false}
                    className="!h-12 !px-6 !text-black !text-xl !w-full"
                    containerClassName="w-full mt-2"
                />
            </nav>
        </>
    );
};

export default Navbar;
