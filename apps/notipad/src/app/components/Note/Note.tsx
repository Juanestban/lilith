import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Note } from '../../interfaces';
import { useNoteContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import s from './Note.module.css';

interface NoteProps extends Note {
  // ...
}

const Note: FC<NoteProps> = ({ id, title, description }) => {
  const navigate = useNavigate();
  const { handleDelete } = useNoteContext();
  const classes = cn(s.title);

  const handleRemove = (id: number | undefined) => () => {
    id && handleDelete(id);
    navigate('/home');
  };

  return (
    <div className={s.container} tabIndex={0}>
      <Link
        to={`/note/${id}`}
        className={s.link}
        style={{ height: '100%', display: 'block' }}
      >
        <h3 className={classes}>
          {title}
          <span>{id}</span>
        </h3>
        <p>{description}</p>
      </Link>
      <Button
        className={s.buttonDeleteNote}
        variant="danger"
        onClick={handleRemove(id)}
      >
        delete
      </Button>
    </div>
  );
};

export default Note;
export type { NoteProps };
