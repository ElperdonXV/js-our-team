// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function printCards(array, container) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const templateDiv = `
      <div class="team-card">
        <div class="card-image">
          <img src="img/${obj.image}" alt="">
        </div>
        <div class="card-text">
          <h3>${obj.name}</h3>
          <p>${obj.role}</p>
        </div>
      </div>`;

    container.innerHTML += templateDiv;
  }
}

const container = document.querySelector('.team-container');
printCards(team, container);


//BONUS 
//Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team:
//cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, 
//e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const button = document.getElementById('addMemberButton');

button.addEventListener('click', function (event) {
  event.preventDefault(); //previene il refresh della pagina in un form

  //prendiamo dati inseriti dall'utente
  const nome = inputName.value;
  const ruolo = inputRole.value;
  const foto = inputImage.value;

  if (nome.length > 0 && ruolo.length > 0  && foto.length > 0) {
    //se ha inserito effettivamente qualcosa
    const obj = {
      name: nome,
      role: ruolo,
      image: foto
    };
    team.push(obj);

    //ristampiamo tutte le cards
    const container = document.querySelector('.team-container');
    printCards(team, container);
  } else {
    console.log('Non hai inserito i dati correttamente!');
  }
});