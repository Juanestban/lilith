import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useNoteContext } from '../../contexts';
import { Note } from '../../components';

import s from './HomePage.module.css';

interface HomePageProps {
  //  ...
}

const HomePage: FC<HomePageProps> = (props) => {
  const { notes } = useNoteContext();
  const classes = cn(s.test);

  return (
    <div className={classes}>
      {notes.length === 0 && (
        <h2 className={s.titleNotesEmpty}>Create your first note!</h2>
      )}
      <article className={s.article}>
        {notes.map((note) => (
          <Link key={note.id} to={`/note/${note.id}`} className={s.link}>
            <Note {...note} />
          </Link>
        ))}
      </article>
    </div>
  );
};

export default HomePage;
export type { HomePageProps };
