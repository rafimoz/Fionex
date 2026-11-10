import React, { useEffect, useState } from 'react';

export const AuraCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate for fine pointer devices (desktops/laptops)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[120px] transition-transform duration-100 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(180, 130, 40, 0.03) 50%, transparent 70%)',
          transform: `translate3d(${position.x - 225}px, ${position.y - 225}px, 0)`,
          willChange: 'transform'
        }}
      />
    </div>
  );
};
