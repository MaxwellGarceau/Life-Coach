import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNote, startAddNote } from '../../actions/notes';
import notes from '../fixtures/notes';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const noteData = {};
  notes.forEach(({ id, noteDescription, currentStartTime, currentEndTime }) => {
    noteData[id] = { noteDescription, currentStartTime, currentEndTime };
  });
  database.ref(`users/${uid}/notes`).set(noteData).then(() => done());
});

test('should setup note action object with provided values', () => {
  const noteData = {
    noteDescription: 'should setup note action object with provided values',
    currentStartTime: '1am',
    currentEndTime: '3am'
  };
  const action = addNote(noteData);

  expect(action).toEqual({
    type: 'ADD_NOTE',
    note: noteData
  });
});

test('should add note to database and store', () => {
  const store = createMockStore(defaultAuthState);
  const noteData = {
    noteDescription: 'should add note to database and store',
    currentStartTime: '1am',
    currentEndTime: '3am'
  };

  store.dispatch(startAddNote(noteData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_NOTE',
      note: {
        id: expect.any(String),
        ...noteData
      }
    });
  })
});
