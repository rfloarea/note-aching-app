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
const btnSave = document.querySelector('#btn-save')
btnAddNote.addEventListener('click', createNoteCard);
btnSave.addEventListener('click', saveNotes);

// Let's shape our data and hold onto it
const notes = [
  {
    title: "Note title one",
    content: "Content of note one",
  },
  {
    title: "Note title two",
    content: "Content of note two",
  },
];

// Get data from storage, render it in UI
if (localStorage.hasOwnProperty('notes')) {
  // get data
  const data = JSON.parse(localStorage.getItem('notes'));
  // push data into array
  notes.push(data);
  // render data to UI
  renderData(notes);
} else {
  renderData(notes);
};

// render data
function renderData(notes) {
  for (const note of notes) {
    console.log(note);
    createNoteCard(note);
  };
};

function createNoteCard(note) {
  const noteCard = document.createElement('div');
  noteCard.classList.add('note');
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
  btnTrash.addEventListener('click', trashNote);
  main.appendChild(noteCard);
};

function trashNote() {
  const note = this.nodeParent.nodeParent
  console.log(note)
};

// The purpose of this function is to save all notes with one action
function saveNotes() {
  // first we collect our note elements into an array
  const noteCards = document.querySelectorAll('.note');
  // now we iterate through that array using a for...of loop (I like the syntax)
  for (const noteCard of noteCards) {
    // extract the title and content values
    const title = noteCard.querySelector('.title').value;
    const content = noteCard.querySelector('.content').value;
    // create an object with those values
    const note = { title, content };
    // push that object into our notes array (initialized at the top of our program)
    notes.push(note);
  };
  // now we store our updated notes array
  localStorage.setItem('notes', JSON.stringify(notes));
};