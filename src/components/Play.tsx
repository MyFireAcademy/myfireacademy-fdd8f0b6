
import { SVGProps } from 'react';

interface PlayProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const Play = ({ size, ...props }: PlayProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || props.width || 24} 
    height={size || props.height || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default Play;
