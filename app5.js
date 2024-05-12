const quizData = [{
    question: "c5q1.png",
    a: "3",
    b: "6",
    c: "-3",
    d: "9",
    correct: "",
},

{
  question: "An excess of silver nitrate is added to 100ml of a 0.01M solution of pentaaquachloridochromium(III)chloride. The number of moles of AgCl precipitate would be",
  a: "0.02",
  b: "0.002",
  c: "0.01",
  d: "0.2",
  correct: "",
},
{
    question: "A complex has a molecular formula MSO4Cl. 6H2O .The aqueous solution of it gives white precipitate with Barium chloride solution and no precipitate is obtained when it is treated with silver nitrate solution. If the secondary valence of the metal is six, which one of the following correctly represents the complex?",
    a: "c5o1.png",
    b: "c5o2.png",
    c: "c5o3.png",
    d: "c5o4.png",
    correct: "",
  },
  {
    question: "Oxidation state of Iron and the charge on the ligand NO in Fe ( H2O )5 NO SO4 are",
    a: "+2 and 0 respectively",
    b: "+3 and 0 respectively",
    c: "+3 and -1 respectively",
    d: "+1 and +1 respectively",
    correct: "",
  },
  {
    question: "As per IUPAC guidelines, the name of the complex [Co(en)₂(ONO)Cl] is",
    a: "Chlorobisethylenediaminenitritocobalt(III) chloride",
    b: "Chloridobis(ethane-1,2-diamine)nitro-Ocobaltate(III)chloride",
    c: "Chloridobis(ethane-1,2-diammine)nitrito -Ocobalt(II) chloride",
    d: "Chloridobis(ethane-1,2-diammine)nitrito κ -Ocobalt(III)chloride",
    correct: "",
  },
  {
    question: "IUPAC name of the complex K₃[Al(C₂O₄)₃] is",
    a: "Potassiumtrioxalatoaluminium(III)",
    b: "Potassiumtrioxalatoaluminate(II)",
    c: "Potassiumtrisoxalatoaluminate(III)",
    d: "Potassiumtrioxalatoaluminate(III)",
    correct: "",
  },
  {
    question: "A magnetic moment of 1.73BM will be shown by one among the following",
    a: "TiCl₄",
    b: "5q7o1.png",
    c: "5q7o2.png",
    d: "5q7o3.png",
    correct: "",
  },
  {
    question: "Crystal field stabilization energy for high spin d5 octahedral complex is",
    a: "−0.6∆ 0",
    b: "0",
    c: "2(P −∆ 0 )",
    d: "2(P + ∆ 0 )",
    correct: "",
  },
  {
    question: "In which of the following coordination entities the magnitude of Δ0 will be maximum?",
    a: "5q9o1.png",
    b: "5q9o2.png",
    c: "5q9o3.png",
    d: "5q9o4.png",
    correct: "",
  },
  {
    question: "Which one of the following will give a pair of enantiomorphs?",
    a: "5q10o1.png",
    b: "5q10o2.png",
    c: "5q10o3.png",
    d: "5q10o4.png",
    correct: "",
  },
  {
    question: "Which type of isomerism is exhibited by Pt ( NH3 )2 Cl2  ?",
    a: "Coordination isomerism",
    b: "Linkage isomerism",
    c: "Optical isomerism",
    d: "Geometrical isomerism",
    correct: "",
  },
  {
    question: "How many geometrical isomers are possible for Pt ( Py ) ( NH3 ) ( Br )( Cl )  ?",
    a: "3",
    b: "4",
    c: "0",
    d: "15",
    correct: "",
  },
  {
    question: "Which one of the following pairs represents linkage isomers?",
    a: "c5q3o1.png",
    b: "c5q3o2.png",
    c: "c5q3o3.png",
    d: "both (b) and (c)",
    correct: "",
  },
  {
    question: "Which kind of isomerism is possible for a complex Co ( NH3 ) 4 Br2  Cl ?",
    a: "geometrical and ionization",
    b: "geometrical and optical",
    c: "optical and ionization",
    d: "geometrical only",
    correct: "",
  },
  {
    question: "Which one of the following complexes is not expected to exhibit isomerism?",
    a: "5q15o1.png",
    b: "5q15o2.png",
    c: "5q15o3.png",
    d: "5q15o4.png",
    correct: "",
  },
  {
    question: "A complex in which the oxidation number of the metal is zero is",
    a: "5q16o1.png",
    b: "5q16o2.png",
    c: "5q16o3.png",
    d: "both (b) and (c)",
    correct: "",
  },
  {
    question: "Formula of tris(ethane-1,2-diamine)iron(II)phosphate",
    a: "5q17o1.png",
    b: "5q17o2.png",
    c: "5q17o3.png",
    d: "5q17o4.png",
    correct: "",
  },
  {
    question: "Which of the following is paramagnetic in nature?",
    a: "5q18o1.png",
    b: "5q18o2.png",
    c: "5q18o3.png",
    d: "5q18o4.png",
    correct: "",
  },
  {
    question: "Fac-mer isomerism is shown by",
    a: "5q19o1.png",
    b: "5q19o2.png",
    c: "5q19o3.png",
    d: "5q19o4.png",
    correct: "",
  },
  {
    question: "Choose the correct statement.",
    a: "Square planar complexes are more stable than octahedral complexes",
    b: "The spin only magnetic moment of [Cu ( Cl ) 4 ] is 1.732 BM and it has square planar structure.",
    c: "Crystal field splitting energy ( ∆ 0 ) of [FeF6 ] is higher than the ( ∆ 0 ) of ]Fe ( CN )6 ",
    d: "crystal field stabilization energy of [V ( H2O )6 stabilization of [Ti ( H2O ) ]6 2+ is higher than the crystal field",
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
