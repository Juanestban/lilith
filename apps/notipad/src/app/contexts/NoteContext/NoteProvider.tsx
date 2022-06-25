import {
  useState,
  createContext,
  useContext,
  ReactNode,
  FormEvent,
} from 'react';
import { Note } from '../../interfaces';
import { getId } from '../../utils/getId';
import { mockFc } from '../../utils/mocks';

type Edit = {
  id: number;
  name: string;
  value: string;
};

type NoteContextProps = {
  noteForm: string;
  noteToEdit: Note;
  notes: Note[];
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
  handleClear: () => void;
  handleEdit: (noteToEdit: Edit) => void;
  handleSet: (note: Note) => void;
};

interface NoteProviderProps {
  children: ReactNode;
}

const NOTE_TEMPLATE: Note = {
  id: 0,
  title: '',
  description: '',
};

const NoteContext = createContext<NoteContextProps>({
  noteForm: '',
  noteToEdit: NOTE_TEMPLATE,
  notes: [],
  handleChange: mockFc,
  handleAdd: mockFc,
  handleEdit: mockFc,
  handleClear: mockFc,
  handleSet: mockFc,
});

function NoteProvider({ children }: NoteProviderProps) {
  const [noteForm, setNoteForm] = useState('');
  const [noteToEdit, setNoteToEdit] = useState<Note>(NOTE_TEMPLATE);
  const [notes, setNotes] = useState<Note[]>([]);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setNoteForm(value);
  };

  const handleAdd = () => {
    if (noteForm !== '') {
      const newNote: Note = {
        id: getId(),
        title: noteForm,
        description: '',
      };

      setNotes([...notes, newNote]);
      setNoteForm('');
    }
  };

  const handleEdit = ({ id, name, value }: Edit) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, [name]: value } : note
    );
    setNotes(updatedNotes);
    setNoteToEdit({ ...noteToEdit, [name]: value });
  };

  const handleSet = (note: Note) => setNoteToEdit(note);

  const handleClear = () => setNoteToEdit(NOTE_TEMPLATE);

  return (
    <NoteContext.Provider
      value={{
        noteForm,
        notes,
        noteToEdit,
        handleChange,
        handleAdd,
        handleEdit,
        handleClear,
        handleSet,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

const useNoteContext = () => useContext(NoteContext);

export { NoteProvider, NoteContext, useNoteContext };
export type { NoteContextProps };
