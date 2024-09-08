// select static elements
const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');
btnAddNote.addEventListener('click', handleAddNote);

function handleAddNote() {
  console.log('add note');
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = 
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
        placeholder="What is this called?"
      >
      </textarea>
    </div>
    <div class="container-content">
    <label>
      Content
    </label>
      <textarea
        class="content"
        placeholder="What do you ache to say?'
        cols="5"
        rows="30"
      >
      </textarea>
    </div>
  `;
  
  const btnSave = note.querySelector('.btn-save');
  const btnTrash = note.querySelector('.btn-trash');
  btnSave.addEventListener('click', handleSaveNote);
  btnTrash.addEventListener('click', handleTrashNote);
  
  function handleSaveNote() {
    console.log('save note');
    save();
  };

  function handleTrashNote() {
    console.log('trash note');
    note.remove();
  };

  main.appendChild(note);
}

// TODO
function save() {
  // find all our elements
  const notes = document.querySelectorAll('.note .content');
  const titles = document.querySelectorAll('.note .title');
  // init an array to carry our values
  const data = [];
  // push an object with title and content values into our data array
  notes.forEach((note, index) => {
      const content = note.value;
      const title = titles[index].value;
      if (content.trim() !== ''){
          data.push({title, content});
      }
  });
  console.table(data); // works
  // stamp out an array of just the title and store it
  const dataTitles = data.map(item => item.title);
  console.log(dataTitles);
  localStorage.setItem('dataTitles', JSON.stringify(dataTitles));
  // stamp out an array of just the content and store it
  const dataContent = data.map(item => item.content);
  console.log(dataContent);
  localStorage.setItem('dataContent', JSON.stringify(dataContent));
};

// TODO
function load() {
  // Called on page load
  // this parses our dataContent and dataTitles arrays
  // from which we then iterate through, create notes for each,
  // and append them to main
}