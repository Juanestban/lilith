import { FC } from 'react';
import cn from 'classnames';

import s from './HomePage.module.css';

interface HomePageProps {
  //  ...
}

const HomePage: FC<HomePageProps> = (props) => {
  const classes = cn(s.test);

  return (
    <h1 className={classes}>Hello I'm a component called HomePage</h1>
  )
}

export default HomePage
export type { HomePageProps }
