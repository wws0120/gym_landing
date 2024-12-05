'use client';

import { useLayoutEffect } from 'react';
import { initAnimations } from '../lib/animations';

export default function AnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    initAnimations();
  }, []);

  return <>{children}</>;
}
