import { FormEvent, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Input, Button } from './components';
import { useNoteContext } from './contexts';
import { HomePage, NotePage } from './views';

import './App.css';

export function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { noteForm, handleAdd, handleChange } = useNoteContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAdd();
  };

  useEffect(() => {
    pathname === '/' && navigate('/home', { replace: true });
  }, [location.href]);

  return (
    <main className="main-container">
      <header role="navigation">
        <div className="container-form-input">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              className="input-note"
              placeholder="title of note"
              value={noteForm}
              onChange={handleChange}
            />
            <Button className="button-note-save">save note</Button>
          </form>
        </div>
      </header>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </main>
  );
}

export default App;
