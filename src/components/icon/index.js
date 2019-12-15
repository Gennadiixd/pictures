import React from 'react';
import { ReactComponent as ArrowIcon } from './arrow/arrow.svg';
import { ReactComponent as GarbageBinIcon } from './garbage-bin/garbage-bin.svg';

const iconsMap = {
  arrow: ArrowIcon,
  garbageBin: GarbageBinIcon
}

Icon.defaultProps = {
  className: '',
}

export default function Icon({ className, type }) {
  const classes = `-icon ${className}`;
  const Icon = iconsMap[type];
  return (
    <Icon className={classes} />
  )
}
