const quizData = [{
    question: "Sc( Z=21) is a transition element but Zinc (z=30) is not because",
    a: "both Sc³⁺ and Zn²⁺ ions are colourless and form white compounds.",
    b: "in case of Sc, 3d orbital are partially filled but in Zn these are completely filled",
    c: "last electron as assumed to be added to 4s level in case of zinc",
    d: "both Sc and Zn do not exhibit variable oxidation states",
    correct: "",
},
{
  question: "Which of the following d block element has half filled penultimate d sub shell as well as half filled valence sub shell?",
  a: "Cr",
  b: "Pd",
  c: "Pt",
  d: "none of these",
  correct: "",
},
{
    question: "Among the transition metals of 3d series, the one that has highest negative (M²⁺/M) standard electrode potential is",
    a: "Ti",
    b: "Cu",
    c: "Mn",
    d: "Zn",
    correct: "",
  },
  {
    question: "Which one of the following ions has the same number of unpaired electrons as present in V3+?",
    a: "Ti³⁺",
    b: "Fe³⁺",
    c: "Ni²⁺",
    d: "Cr³⁺",
    correct: "",
  },
  {
    question: "The magnetic moment of Mn²⁺ ion is",
    a: "5.92BM",
    b: "2.80BM",
    c: "8.95BM",
    d: "3.90BM",
    correct: "",
  },
  {
    question: "The catalytic behaviour of transition metals and their compounds is ascribed mainly due to",
    a: "their magnetic behaviour",
    b: "their unfilled d orbitals",
    c: "their ability to adopt variable oxidation states",
    d: "their chemical reactivity",
    correct: "",
  },
  {
    question: "The correct order of increasing oxidizing power in the series",
    a: "VO₂⁺ < Cr₂O₇²⁻ < MnO₄⁻",
    b: "Cr₂O₇²⁻ < VO₂⁺ < MnO₄⁻",
    c: "Cr₂O₇²⁻ < MnO₄⁻ < VOv₂⁺",
    d: "MnO₄⁻ < Cr₂O₇²⁻ < VO₂⁺",
    correct: "",
  },
  {
    question: "In acid medium, potassium permanganate oxidizes oxalic acid to",
    a: "oxalate",
    b: "Carbon dioxide",
    c: "acetate",
    d: "acetic acid",
    correct: "",
  },
  {
    question: "Which of the following statements is not true?",
    a: "on passing H₂S, through acidified K₂Cr₂O₇ solution, a milky colour is observed.",
    b: "Na₂Cr2O₇ is preferred over K₂Cr₂O₇ in volumetric analysis",
    c: "K₂Cr₂O₇ solution in acidic medium is orange in colour",
    d: "K₂Cr₂O₇ solution becomes yellow on increasing the PH beyond 7",
    correct: "",
  },
  {
    question: "Permanganate ion changes to ________ in acidic medium",
    a: "MnO₄²⁻",
    b: "Mn²⁺",
    c: "Mn³⁺",
    d: "MnO₂",
    correct: "",
  },
  {
    question: "How many moles of I2 are liberated when 1 mole of potassium dichromate react with potassium iodide?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "",
  },
  {
    question: "The number of moles of acidified KMnO4 required to oxidize 1 mole of ferrous oxalate(FeC2O4) is",
    a: "5",
    b: "3",
    c: "0.6",
    d: "1.5",
    correct: "",
  },
  {
    question: "Which one of the following statements related to lanthanons is incorrect?",
    a: "Europium shows +2 oxidation state.",
    b: "The basicity decreases as the ionic radius decreases from Pr to Lu.",
    c: "All the lanthanons are much more reactive than aluminium.",
    d: "Ce4+ solutions are widely used as oxidising agents in volumetric analysis.",
    correct: "",
  },
  {
    question: "Which of the following lanthanoid ion is diamagnetic?",
    a: "Eu²⁺",
    b: "Yb²⁺",
    c: "Ce²⁺",
    d: "Sm²⁺",
    correct: "",
  },
  {
    question: "Which of the following oxidation state is most common among the lanthanoids?",
    a: "+4",
    b: "+2",
    c: "+5",
    d: "+3",
    correct: "",
  },
  {
    question: "Assertion : Ce4+ is used as an oxidizing agent in volumetric analysis. Reason: Ce4+ has the tendency of attaining +3 oxidation state.",
    a: "Both assertion and reason are true and reason is the correct explanation of assertion.",
    b: "Both assertion and reason are true but reason is not the correct explanation of assertion.",
    c: "Assertion is true but reason is false.",
    d: "Both assertion and reason are false.",
    correct: "",
  },
  {
    question: "The most common oxidation state of actinoids is",
    a: "+2",
    b: "+3",
    c: "+4",
    d: "+6",
    correct: "",
  },
  {
    question: "The actinoid elements which show the highest oxidation state of +7 are",
    a: "Np, Pu ,Am",
    b: "U, Fm, Th",
    c: "U, Th, Md",
    d: "Es, No, Lr",
    correct: "",
  },
  {
    question: "Which one of the following is not correct?",
    a: "La(OH)₃ is less basic than Lu(OH)₃",
    b: "In lanthanoid series ionic radius of Ln₃+ ions decreases",
    c: "La is actually an element of transition metal series rather than lanthanoid series",
    d: "Atomic radii of Zr and Hf are same because of lanthanoid contraction",
    correct: "",
  }




];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return quizEnd();
}
reset();
const data = quizData[index];
if (data.question.includes('.jpg') || data.question.includes('.png') || data.question.includes('.jpeg')) {
    questionBox.innerHTML = `
        <div>
            <img src="${data.question}" alt="Question Image" />
        </div>
    `;
} else {
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
}

// Handling options
if (data.a.includes('.jpg') || data.a.includes('.png') || data.a.includes('.jpeg')) {
    allInputs[0].nextElementSibling.innerHTML = `<img src="${data.a}" alt="Option A" />`;
} else {
    allInputs[0].nextElementSibling.innerText = data.a;
}

if (data.b.includes('.jpg') || data.b.includes('.png') || data.b.includes('.jpeg')) {
    allInputs[1].nextElementSibling.innerHTML = `<img src="${data.b}" alt="Option B" />`;
} else {
    allInputs[1].nextElementSibling.innerText = data.b;
}

if (data.c.includes('.jpg') || data.c.includes('.png') || data.c.includes('.jpeg')) {
    allInputs[2].nextElementSibling.innerHTML = `<img src="${data.c}" alt="Option C" />`;
} else {
    allInputs[2].nextElementSibling.innerText = data.c;
}

if (data.d.includes('.jpg') || data.d.includes('.png') || data.d.includes('.jpeg')) {
    allInputs[3].nextElementSibling.innerHTML = `<img src="${data.d}" alt="Option D" />`;
} else {
    allInputs[3].nextElementSibling.innerText = data.d;
}

// Add event listeners to option labels
const optionLabels = document.querySelectorAll('.options label');
optionLabels.forEach((label, i) => {
    label.addEventListener('click', () => {
        allInputs[i].checked = true;
    });
});
};


document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h2> Total correct ${correct} from ${total} </h2>
        <a align="center" href="./">Home</a>

    </div>
`
}
loadQuestion(index);
