import React from 'react';
import { cn } from '../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = ({ className, hover = true, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white border border-slate-200/60 rounded-2xl shadow-premium transition-all duration-300',
        hover && 'hover:shadow-premium-hover hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
