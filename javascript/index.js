// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
const promise1 = new Promise((resolve, reject) => {
  getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      getInstruction(
        "mashedPotatoes",
        1,
        (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes",
            2,
            (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;
              getInstruction(
                "mashedPotatoes",
                3,
                (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  getInstruction(
                    "mashedPotatoes",
                    4,
                    (step5) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step5}</li>`;
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                      document
                        .querySelector("#mashedPotatoesImg")
                        .removeAttribute("hidden");
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
});

// Iteration 2 - using promises
// ...
const promise2 = new Promise((resolve, reject) => {
  obtainInstruction("steak", 0)
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 1);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 2);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 3);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 4);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 5);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 6);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return obtainInstruction("steak", 7);
    })
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    })
    .finally(() => {
      document.querySelector("#steakImg").removeAttribute("hidden");
    });
});

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  let step;

  for (let i = 0; i < 7; i++) {
    step = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

let brusselSproutPromise1 = obtainInstruction("brusselsSprouts", 0);
let brusselSproutPromise2 = obtainInstruction("brusselsSprouts", 1);
let brusselSproutPromise3 = obtainInstruction("brusselsSprouts", 2);
let brusselSproutPromise4 = obtainInstruction("brusselsSprouts", 3);
let brusselSproutPromise5 = obtainInstruction("brusselsSprouts", 4);
let brusselSproutPromise6 = obtainInstruction("brusselsSprouts", 5);
let brusselSproutPromise7 = obtainInstruction("brusselsSprouts", 6);
let brusselSproutPromise8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([
  brusselSproutPromise1,
  brusselSproutPromise2,
  brusselSproutPromise3,
  brusselSproutPromise4,
  brusselSproutPromise5,
  brusselSproutPromise6,
  brusselSproutPromise7,
  brusselSproutPromise8,
])
  .then((values) => {
    console.log("obtain brussels", values);
    values.forEach((value) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    });
  })
  .finally(() => {
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
