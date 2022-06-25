import { FC } from 'react';
import cn from 'classnames';

import s from './Input.module.css';

interface InputProps {
  //  ...
}

const Input: FC<InputProps> = (props) => {
  const classes = cn(s.test);

  return <h1 className={classes}>Hello I'm a component called Input</h1>;
};

export default Input;
export type { InputProps };
