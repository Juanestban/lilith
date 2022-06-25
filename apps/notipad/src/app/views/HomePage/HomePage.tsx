import { FC } from 'react';
import cn from 'classnames';

import { useNoteContext } from '../../contexts';
import { Note } from '../../components';

import s from './HomePage.module.css';

interface HomePageProps {
  //  ...
}

const HomePage: FC<HomePageProps> = () => {
  const { notes } = useNoteContext();
  const classes = cn(s.test);

  return (
    <div className={classes}>
      {notes.length === 0 && (
        <h2 className={s.titleNotesEmpty}>Create your first note!</h2>
      )}
      <article className={s.article}>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </article>
    </div>
  );
};

export default HomePage;
export type { HomePageProps };
