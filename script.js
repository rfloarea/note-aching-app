const btnAddNote = document.querySelector('#btnAddNote');
const main = document.querySelector('#main');
btnAddNote.addEventListener('click', handleAddNote);

function handleAddNote(title='', content='') {
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
        rows="3"
        cols="10"
      >${title}</textarea>
    </div>
    <div class="container-content">
      <label>
        Content
      </label>
      <textarea
        class="content"
        rows="10">${content}</textarea>
    </div>
  `;
  
  const btnSave = note.querySelector('.btn-save');
  const btnTrash = note.querySelector('.btn-trash');
  const textareaTitle = note.querySelector('.title');
  btnSave.addEventListener('click', handleSaveNote);
  btnTrash.addEventListener('click', handleTrashNote);
  
  function handleSaveNote() {
    save();
  };

  function handleTrashNote() {
    note.remove();
    save();
  };
  main.appendChild(note);
  save();
  textareaTitle.focus();
};

function save() {
  const notes = document.querySelectorAll('.note .content');
  const titles = document.querySelectorAll('.note .title');
  const data = [];
  notes.forEach((note, index) => {
      const content = note.value;
      const title = titles[index].value;
      if (content.trim() && title.trim() !== ''){
          data.push({title, content});
      };
  });
  const dataTitles = data.map(item => item.title);
  localStorage.setItem('dataTitles', JSON.stringify(dataTitles));
  const dataContent = data.map(item => item.content);
  localStorage.setItem('dataContent', JSON.stringify(dataContent));
};

function load() {
  const dataTitles = JSON.parse(localStorage.getItem('dataTitles'));
  const dataContent = JSON.parse(localStorage.getItem('dataContent'));
  for (let i = 0; i < dataTitles.length; i++) {
    handleAddNote(dataTitles[i], dataContent[i]);
  };
};
load();