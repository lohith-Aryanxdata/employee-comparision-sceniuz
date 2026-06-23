import { Sparkles } from 'lucide-react';

interface SparkleProps {
  className?: string;
  size?: number;
}

export function Sparkle({ className = '', size = 16 }: SparkleProps) {
  return (
    <Sparkles 
      className={`inline-block animate-pulse ${className}`} 
      size={size} 
    />
  );
}
