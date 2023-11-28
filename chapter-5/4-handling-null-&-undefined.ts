// const messageInputElement = document.getElementById("messageInput");
// if (messageInputElement) {
//   const parentElement = messageInputElement.parentElement;
//   if (parentElement) {
//     const messageInputParentInnerHTML = parentElement.innerHTML;
//     if (messageInputParentInnerHTML) {
//     }
//   }
// }

const optionalMessageInputParentInnerHTML =
  document.getElementById("messageInput")?.parentElement?.innerHTML; // access nullable properties of an object

function handleTeacherAPIResponse(response: {
  teacher?: string[];
  error?: string;
}) {
  const firstTeacher = response.teacher?.[0]; // access nullable elements of an array
}

async function makeAPIRequest(url: string, log?: (message: string) => void) {
  log?.("Request stated."); // call nullable functions
  const response = await fetch(url);
  const data = await response.json();

  log?.("Request complete.");

  return data;
}

// checks for all falsy values ie empty strings, false, 0, NaN
const messageInputValue1 =
  document.getElementById("messageInput")?.innerHTML || "John";

// only checks for null or undefined
const messageInputValue2 =
  document.getElementById("messageInput")?.innerHTML ?? "John";

// tell typescript that we know for sure that the value is not null or undefined, only usable in typescript
// use at your own discretion
const messageInputValue3 = document.getElementById("messageInput")!.innerHTML;
