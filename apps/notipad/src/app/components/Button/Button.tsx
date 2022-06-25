import { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

interface ButtonProps {
  //  ...
}

const Button: FC<ButtonProps> = (props) => {
  const classes = cn(s.test);

  return (
    <h1 className={classes}>Hello I'm a component called Button</h1>
  )
}

export default Button
export type { ButtonProps }
