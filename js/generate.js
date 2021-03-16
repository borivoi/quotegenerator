const trivia=[
    {
      start: "Novak Djokovic",
      middle: "je najbolji",
      end: "teniser.",
    },
    {
      start: "Golden Gate",
      middle: "je dugacak",
      end: "tacno 2737m.",
    },
    {
      start: "Urin pingvina",
      middle: "cini 3%",
      end: "Antarktickih glecera.",
    },
    {
      start: "Puzevi",
      middle: "mogu da spavaju",
      end: "i do 3 godine.",
    },
    {
      start: "Nikola Tesla",
      middle: "je umro",
      end: "17. januara 1943.",
    },
    {
      start: "Nikolas Kejdz",
      middle: "je jeo magicke pecurke",
      end: "sa svojom mackom.",
    }
];
const headlines=[
    {
    start: "Krava propala kroz krov",
    middle: "na glavu Turčinu",
    end: "koji je igrao domino.",
  },
  {
    start: "Australianac preživeo",
    middle: "pet smrtonosnih",
    end: "zmijskih ugriza.",
  },
  {
    start: "Beograd je posetio",
    middle: "poznati nemacki fudbaler",
    end: "Miroslav Klose.",
  },
  {
    start: "Ovog vikenda se",
    middle: "na Marakani",
    end: "sastaju dve ekipe.",
  },
  {
    start: "Putari savetuju da",
    middle: "na putu do Grcke",
    end: "izbegavate rupe na putu.",
  },
  {
    start: "Od sledece nedelje",
    middle: "najavljuju iznenadjujuce",
    end: "lose vreme."
  }
];

let n=1;
let type=1;
let qoute="";

function updateNumber(k){
    n=k;
    document.getElementById("side_text").innerHTML =k;
}

function updateType(k){
    type=k;
}

const generateQoute = () => {
    let array;
    if(type===1)
    array= trivia;
    else
    array=headlines;
    let string="";
    for (let i=0; i < n; i++) {
        let quote = getQuote(array);
        string+=quote+"<br>";
      }
    document.getElementById("quote").innerHTML =string;
}

const getQuote = (selectQt) => {
    let num = randomNum(0, selectQt.length - 1);
    let uno = selectQt[num].start;

    num = randomNum(0, selectQt.length - 1);
    let dos = selectQt[num].middle;

    num = randomNum(0, selectQt.length - 1);
    let tres = selectQt[num].end;

    return '"'+ uno + ' ' + dos + ' ' + tres+'"';
}

const randomNum = (m, n) => {
    return Math.floor(Math.random() * n) + m;
}

