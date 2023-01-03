const data = [
  {
    title: "Savings",
    description: "My monthly saving is",
    answers: [
      {
        id: 46,
        question_id: 1,
        title: "More than 50% of my income",
      },
      {
        id: 47,
        question_id: 1,
        title: "25-50% of my income",
      },
      {
        id: 48,
        question_id: 1,
        title: "10-25% of my income",
      },
      {
        id: 49,
        question_id: 9,
        title: "5-10% of my income",
        description: null,
      },
      {
        id: 50,
        question_id: 9,
        title: "Not able to save any money at all",
        description: null,
      },
    ],
  },
  {
    id: 10,
    quizz_id: 2,
    title: "Emergency Funds",
    description: "My emergency fund will be able to cover expenses for",
    answers: [
      {
        id: 51,
        question_id: 10,
        title: "6 months or more",
        description: null,
      },
      {
        id: 52,
        question_id: 10,
        title: "3-5 months",
        description: null,
      },
      {
        id: 53,
        question_id: 10,
        title: "1-2 months",
        description: null,
      },
      {
        id: 54,
        question_id: 10,
        title: "Less than 1 month",
        description: null,
      },
      {
        id: 55,
        question_id: 10,
        title: "Don't have any emergency fund",
        description: null,
      },
    ],
  },
  {
    id: 11,
    quizz_id: 2,
    title: "Debt",
    description: "My monthly debt repayment is",
    answers: [
      {
        id: 56,
        question_id: 11,
        title: "Noting as I am debt free :)",
        description: null,
      },
      {
        id: 57,
        question_id: 11,
        title: "less than 30% of my monthly income towards EMIs",
        description: null,
      },
      {
        id: 58,
        question_id: 11,
        title: "40-50% of my monthly income towards EMIs",
        description: null,
      },
      {
        id: 59,
        question_id: 11,
        title: "more than 60% of monthly income towards EMIs",
        description: null,
      },
    ],
  },
  {
    id: 12,
    quizz_id: 2,
    title: "Investment",
    description:
      "I invest a part of my monthly savings towards achieving my financial goals",
    answers: [
      {
        id: 60,
        question_id: 12,
        title: "regularly",
        description: null,
      },
      {
        id: 61,
        question_id: 12,
        title: "sometimes",
        description: "occasionally",
      },
      {
        id: 62,
        question_id: 12,
        title: "Never, it lies idle in my bank account",
        description: null,
      },
    ],
  },
  {
    id: 13,
    quizz_id: 2,
    title: "Credit Card",
    description: "My credit card bills are",
    answers: [
      {
        id: 63,
        question_id: 13,
        title: "Paid in full every month",
        description: null,
      },
      {
        id: 64,
        question_id: 13,
        title: "Sometimes rolled over 1-3 times a year",
        description: null,
      },
      {
        id: 65,
        question_id: 13,
        title: "Usually rolled over because I can't pay the full amount",
        description: null,
      },
    ],
  },
  {
    id: 14,
    quizz_id: 2,
    title: "Life Insurance",
    description: "My life insurance coverage is",
    answers: [
      {
        id: 66,
        question_id: 14,
        title: "Around 6-10 times of my annual salary",
        description: null,
      },
      {
        id: 67,
        question_id: 14,
        title: "Around 3-5 times of my annual salary",
        description: null,
      },
      {
        id: 68,
        question_id: 14,
        title: "Around 1-2 times of my annual salary",
        description: null,
      },
      {
        id: 69,
        question_id: 14,
        title: "Less than my annual salary",
        description: null,
      },
      {
        id: 70,
        question_id: 14,
        title: "I do not have life insurance cover",
        description: null,
      },
    ],
  },
  {
    id: 15,
    quizz_id: 2,
    title: "Mediclaim",
    description:
      "In case of a medical emergency in the family, all costs will be met",
    answers: [
      {
        id: 71,
        question_id: 15,
        title: "Out of my emergency fund",
        description: null,
      },
      {
        id: 72,
        question_id: 15,
        title: "Through a standalone health cover of AED 100K+",
        description: null,
      },
      {
        id: 73,
        question_id: 15,
        title: "Through the employer provided Mediclaim cover",
        description: null,
      },
      {
        id: 74,
        question_id: 15,
        title: "Don't know as I don't have any medical cover",
        description: null,
      },
    ],
  },
  {
    id: 16,
    quizz_id: 2,
    title: "Spend",
    description: "My monthly spending are mostly on",
    answers: [
      {
        id: 75,
        question_id: 16,
        title: "Necessary expenses like food, rent and utilities",
        description: null,
      },
      {
        id: 76,
        question_id: 16,
        title: "Basics expenses and occasional splurging",
        description: null,
      },
      {
        id: 77,
        question_id: 16,
        title: "Entertainment, Movies and Dining out",
        description: null,
      },
      {
        id: 78,
        question_id: 16,
        title: "Anything that catches my fancy. Why earn if you don't spend?",
        description: null,
      },
    ],
  },
];

class Question {
  constructor(index = "", { description = " ", title = "", answers = [] }) {
    this.title = title;
    this.description = description;
    this.answers = answers;
    let currentIndex = index + 1;
    this.queType = this.createTextNode(
      "small",
      "",
      "Que " + currentIndex + " / " + this.title
    );

    this.queDescription = this.createTextNode(
      "span",
      "title",
      this.description
    );
    this.optionsWrapper = this.createDiv("options-wrapper", []);
    answers.forEach((elem) => {
      let option = this.createLabel(elem.id, [
        this.createInput(elem.id, elem.id, "options"),
        document.createTextNode(elem.title),
      ]);
      this.optionsWrapper.appendChild(option);
    });

    const queWrapper = document.createElement("form");
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.hidden = true;
    btn.className = "hidden-btn";
    queWrapper.addEventListener("submit", (event) => {
      event.preventDefault();
      handleQueSubmission();
    });
    queWrapper.appendChild(btn);
    queWrapper.className = "wrapper";
    queWrapper.appendChild(this.queType);
    queWrapper.appendChild(this.queDescription);
    queWrapper.appendChild(this.optionsWrapper);
    return queWrapper;
  }

  createInput(id = "", value, name = "input") {
    const elem = document.createElement("input");
    elem.type = "radio";
    elem.name = name;
    elem.value = value;
    elem.id = id;
    return elem;
  }
  createLabel(htmlFor, children = []) {
    const labelNode = document.createElement("label");
    labelNode.setAttribute("for", htmlFor);
    children.forEach((i) => {
      labelNode.appendChild(i);
    });
    return labelNode;
  }

  createTextNode(type, className = "", text = "") {
    const paraElement = document.createElement(type);
    if (className) paraElement.className = className;
    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv(className = null, childElements = []) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach((element) => {
      divElement.appendChild(element);
    });
    return divElement;
  }
}

//  main logic
const mainNode = document.querySelector("main");
const locationPointer = document.querySelector("#location-pointer");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const radioBtns = document.getElementsByName("options");

// state management

const React = (() => {
  let hooks = [];
  let idx = 0;
  function useState(initState) {
    let _idx = idx;
    let state = hooks[_idx] || initState;
    let setState = (cb) => {
      let prev = hooks[_idx] || initState;
      hooks[_idx] = cb(prev);
    };
    idx++;
    return [state, setState];
  }

  const useEffect = (cb, depArray) => {
    let oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((i, idx) => !Object.is(i, oldDeps[idx]));
    }
    if (hasChanged) cb();
    hooks[idx] = depArray;
  };

  function render(Component) {
    idx = 0;
    let C = Component();
    C.render();
    return C;
  }
  return { useState, render, useEffect };
})();

const Ques = () => {
  const [qIdx, setQidx] = React.useState(0);
  const [ansData, setAnsData] = React.useState({});
  return {
    render() {
      const que = new Question(qIdx, data[qIdx]);
      mainNode.innerHTML = "";
      mainNode.appendChild(que);
      const radioBtns = document.querySelectorAll("input[type=radio]")[0];
      radioBtns.checked = true;
      radioBtns.focus();
    },
    moveNext() {
      setQidx((prev) => Math.min(Object.keys(data).length - 1, prev + 1));
    },
    movePrev() {
      setQidx((prev) => Math.max(0, prev - 1));
    },
    provideIdx() {
      return qIdx;
    },
    getAnsData() {
      return ansData;
    },
    setAnsData(payload) {
      setAnsData((prev) => {
        let data = { ...prev, ...payload };
        return data;
      });
    },
  };
};
const Progress = (idx) => {
  const [progress] = React.useState(idx);
  return {
    render() {
      locationPointer.style.left = (progress / 8) * 100 + "%";
    },
  };
};

let que = React.render(Ques);
let idx = que.provideIdx();
let formProgress = React.render(() => Progress(idx));

prevBtn.addEventListener("click", () => {
  que.movePrev();
  React.render(Ques);
  React.render(() => Progress(idx));
});

nextBtn.addEventListener("click", async () => {
  await handleQueSubmission();
});

function handleQueSubmission() {
  let selected = null;
  radioBtns.forEach((i) => {
    if (i.checked) selected = i.value;
  });

  que.setAnsData({ [que.provideIdx()]: selected });
  que.moveNext();
  que = React.render(Ques);
  React.render(() => Progress(idx));
  let allAns = que.getAnsData();
  if (Object.keys(allAns).length === 8) {
    let canSubmit = Object.keys(allAns).map((i) => {
      return allAns[i];
    });
    if (canSubmit) handleQueEnd();
  }
}

async function handleQueEnd() {
  await fetch("https://api.github.com/users");
  window.location.href = "/score";
}
