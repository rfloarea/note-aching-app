/**
 * What's the story here?
 * 
 * This is the story of a simple note taking system.
 * It uses boring technology that is provided by the web platform.
 * 
 * Users can create notes, save notes, edit notes, and delete notes.
 */

// Let's give our sad users some things to play with at the start
const main = document.querySelector('#main');

const btnAddNote = document.querySelector('#btn-add-note');
const btnSave = document.querySelector('#btn-save');

btnAddNote.addEventListener('click', createNoteCard);
btnSave.addEventListener('click', saveNotes);

// Let's shape our data and hold onto it
const notes = [
  {
    title: "Note title one",
    content: "Content of note one",
    id: Math.random(),
  },
  {
    title: "Note title two",
    content: "Content of note two",
    id: Math.random(),
  },
];

// Get data from storage, render it in UI
if (localStorage.hasOwnProperty('notes')) {
  // get data
  const data = JSON.parse(localStorage.getItem('notes'));
  // push data into array
  notes.push(data);
  // render data to UI
  buildNodeList(notes);
};

// FOR TESTING
buildNodeList(notes);

// build our list of elements
function buildNodeList(notes) {
  // clear nodelist
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  };
  // rebuild nodelist
  for (const note of notes) {
    // create an element for each note object
    const noteCard = createNoteCard(note);
    // append it to main
    main.appendChild(noteCard);
  };
};

function createNoteCard(note) {
  const noteCard = document.createElement('div');
  const id = Math.random();
  noteCard.setAttribute('id', id);
  noteCard.setAttribute('class', 'note');
  noteCard.innerHTML = 
  `
    <button class="btn-trash">TRASH</button>
    <div class="container-title">
      <label>
        Title
      </label>
      <textarea
        class="title"
        rows="3"
      >${note.title}</textarea>
    </div>
    <div class="container-content">
      <label>
        Content
      </label>
      <textarea
        class="content"
        rows="10"
      >${note.content}</textarea>
    </div>
  `;
  const btnTrash = noteCard.querySelector('.btn-trash');
  btnTrash.addEventListener('click', () => trashNote(id));
  notes.push(`${note.title}`, `${note.content}`, id);

  console.log(noteCard);

  return noteCard;
};

function trashNote(id) {
  console.log(id)
  const noteCards = document.querySelectorAll('.note');
  console.log(noteCards)
  const newNoteCards = Array.from(noteCards).filter(noteCard => noteCard.id != id);
  buildNodeList(newNoteCards);
};

// The purpose of this function is to save all notes with one action
function saveNotes() {
  // first we collect our note elements into an array
  const noteCards = document.querySelectorAll('.note');
  // now we iterate through that array using a for...of loop (I like the syntax)
  for (const noteCard of noteCards) {
    // extract the title, content, and id values
    const title = noteCard.querySelector('.title').value;
    const content = noteCard.querySelector('.content').value;
    const id = noteCard.id;
    // create an object with those values
    const note = { title, content, id };
    // push that object into our notes array (initialized at the top of our program)
    notes.push(note);
  };
  // now we store our updated notes array
  localStorage.setItem('notes', JSON.stringify(notes));
};