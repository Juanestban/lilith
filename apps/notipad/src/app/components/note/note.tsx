import { FC } from 'react';
import cn from 'classnames';

import { Note } from '../../interfaces';

import s from './Note.module.css';

type NoteProps = Note;

const Note: FC<NoteProps> = ({ id, title, description }) => {
  const classes = cn(s.test);

  return (
    <div className={s.container} tabIndex={0}>
      <h3 className={classes}>
        {title} - <span>id: {id}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Note;
export type { NoteProps };
