import { FC } from 'react';
import cn from 'classnames';

import s from './NotePage.module.css';

interface NotePageProps {
  //  ...
}

const NotePage: FC<NotePageProps> = (props) => {
  const classes = cn(s.test);

  return (
    <h1 className={classes}>Hello I'm a component called NotePage</h1>
  )
}

export default NotePage
export type { NotePageProps }
