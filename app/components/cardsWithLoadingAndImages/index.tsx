'use client';

import { Card as CardAnt } from 'antd';

interface CardProps {
  action?: () => void;
  className?: string;
  loading?: boolean;
  hoverable?: boolean;
  cover?: React.ReactNode;
  children: React.ReactNode;
}

export default function Card({
  action,
  className,
  loading = false,
  hoverable = true,
  cover,
  children,
}: CardProps) {
  return (
    <CardAnt
      hoverable={hoverable}
      loading={loading}
      onClick={action}
      cover={cover}
      className={className}
    >
      {children}
    </CardAnt>
  );
}
