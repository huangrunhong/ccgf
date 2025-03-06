import clsx from 'clsx';

import { ResponseStatus } from '@/types';

interface BadgeProps {
  content: string;
  status?: ResponseStatus;
}

const Badge = ({ content, status }: BadgeProps) => (
  <div className={clsx('badge', status)}>{content}</div>
);

export default Badge;
