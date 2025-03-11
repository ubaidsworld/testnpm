import Svg from '../Svg';
import { IconProps } from '../types';

const XMarkIcon = ({ ...props }: IconProps) => {
  return (
    <Svg {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </Svg>
  );
};

XMarkIcon.displayName = 'XMarkIcon';

export default XMarkIcon;
