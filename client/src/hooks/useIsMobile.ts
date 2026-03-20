import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let timeout: number;
        const check = () => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => setIsMobile(window.innerWidth <= breakpoint), 150);
        };
        check();
        window.addEventListener('resize', check);
        return () => {
            window.removeEventListener('resize', check);
            clearTimeout(timeout);
        };
    }, [breakpoint]);

    return isMobile;
}
