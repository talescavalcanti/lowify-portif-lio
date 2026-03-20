import { ReactNode } from 'react';

interface CartoonButtonProps {
  label: string | ReactNode;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  containerClassName?: string;
}

export function CartoonButton({
  label,
  color = 'bg-[#283eb9]',
  hasHighlight = true,
  disabled = false,
  onClick,
  href,
  className = '',
  containerClassName = '',
}: CartoonButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const baseClasses = `relative h-14 px-10 text-xl rounded-full font-black text-white border-3 border-black transition-all duration-150 group flex items-center justify-center
    ${color} hover:shadow-[0_6px_0_0_#000000] font-['Urbanist']
    ${disabled ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-1 active:translate-y-0 active:shadow-none'}
    ${className}`;

  const highlightElement = hasHighlight && !disabled && (
    <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
      <div className={`absolute top-1/2 left-[-100%] w-16 h-24 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]
        ${color.includes('#ffffff') || color.includes('white') ? 'bg-black/10' : 'bg-white/30'}`}>
      </div>
    </div>
  );

  const content = (
    <span className="relative z-10 whitespace-nowrap flex items-center justify-center gap-2 tracking-tight">
      {label}
    </span>
  );

  const wrapperClasses = `inline-flex align-middle ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} overflow-visible ${containerClassName}`;

  if (href && !disabled) {
    return (
      <a href={href} className={`${wrapperClasses} ${baseClasses} no-underline`} onClick={handleClick}>
        {content}
        {highlightElement}
      </a>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button disabled={disabled} className={baseClasses} onClick={handleClick}>
        {content}
        {highlightElement}
      </button>
    </div>
  );
}
