import { FC, useEffect, FormEvent } from 'react';
import cn from 'classnames';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button, Input } from '../../components';
import { useNoteContext } from '../../contexts';

import s from './NotePage.module.css';

interface NotePageProps {
  //  ...
}

const NotePage: FC<NotePageProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    notes,
    noteToEdit,
    handleEdit,
    handleSet,
    handleClear,
    handleDelete,
  } = useNoteContext();
  const classes = cn(s.test);

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    const idNumber = Number(id);

    id && handleEdit({ id: idNumber, name, value });
  };

  const handleRemove = (id: string | undefined) => () => {
    const idNormal = Number(id);

    id && handleDelete(idNormal);
    navigate('/home', { replace: true });
  };

  useEffect(() => {
    const idNormal = Number(id);
    const filtered = notes.find((n) => n.id === idNormal);
    if (filtered) {
      console.log(filtered);
      const { title, description } = filtered;
      handleSet({ id: idNormal, title, description });
    }
  }, [id]);

  return (
    <section>
      <div className={s.containerButtons}>
        <Link to="/" onClick={handleClear}>
          go home
        </Link>
        <Button variant="danger" onClick={handleRemove(id)}>
          delete
        </Button>
      </div>
      <hr style={{ borderColor: 'gray', marginTop: 10, marginBottom: 20 }} />
      <div className={s.containerLabel}>
        <label>
          title:
          <Input
            type="text"
            name="title"
            value={noteToEdit.title}
            className={s.input}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          description:
          <textarea
            name="description"
            className={cn(s.input, s.textarea)}
            value={noteToEdit.description}
            autoComplete="off"
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
    </section>
  );
};

export default NotePage;
export type { NotePageProps };
