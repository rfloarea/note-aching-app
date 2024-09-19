/**
 * What's the story here?
 * 
 * This is the story of a simple note taking system.
 * It uses boring technology that is provided by the web platform.
 * 
 * Users can create notes, edit notes, and delete notes.
 * Creating a note also saves the note.
 */

// Let's give our sad users some things to play with at the start
const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');
btnAddNote.addEventListener('click', createNote);

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

// Render stored data in UI
if (localStorage.hasOwnProperty('notes')) {
  // get data
  const data = JSON.parse(localStorage.getItem('notes'));
  // push data into array
  notes.push(data);
  // render data to UI
  renderData(notes);
};

// render data
function renderData(notes) {
  for (const note of notes) {
    console.log(note);
    const noteCard = document.createElement('div');
    noteCard.classList.add('note');
    noteCard.innerHTML = 
    `
      <div class="buttons">
        <button class="btn-save">SAVE</button>
        <button class="btn-trash">TRASH</button>
      </div>
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
    `
    const btnTrash = noteCard.querySelector('.btn-trash');
    btnTrash.addEventListener('click', trashNote);
    main.appendChild(noteCard);
  };
}

// refresh notes array and push into local storage
function saveNote() {
  const notes = document.querySelectorAll('.note .content');
  const titles = document.querySelectorAll('.note .title');
  
  notes.forEach((note, index) => {
    const content = note.value;
    const title = titles[index].value;
    if (content.trim() && title.trim() !== ''){
      notesArray.push({title, content});
    };
  });

  const dataTitles = data.map(item => item.title);
  const dataContent = data.map(item => item.content);
  localStorage.setItem('dataTitles', JSON.stringify(dataTitles));
  localStorage.setItem('dataContent', JSON.stringify(dataContent));
};