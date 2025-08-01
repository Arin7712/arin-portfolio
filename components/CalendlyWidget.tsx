'use client'; // for Next.js App Router

import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/aringawande7712/30min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyWidget;
