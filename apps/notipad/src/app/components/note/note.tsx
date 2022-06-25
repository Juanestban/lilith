import { FC } from 'react';
import cn from 'classnames';

import s from './note.module.css';

interface noteProps {
  //  ...
}

const note: FC<noteProps> = (props) => {
  const classes = cn(s.test);

  return (
    <h1 className={classes}>Hello I'm a component called note</h1>
  )
}

export default note
export type { noteProps }
