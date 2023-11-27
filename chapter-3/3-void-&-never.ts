// void: annotate a function doesn't return anything but works normally
function sendRequestAndForget(): void {
  fetch("https://example.com/addUser", { method: "POST" });
}

const output = sendRequestAndForget();

function performRequest(requestCallback: () => void) {}

// never: it represents a type that will never exist at runtime
// used to annotate a function that never normally return anything but only throw errors or loop infinitely
function exception(): never {
  throw new Error("Something went wrong.");
}

function loop(): never {
  while (true) {}
  // unreachable
}

// return the result of a never function inside a function
// the outer function result will be correctly inferred as never
function outer() {
  return exception();
}

const result = outer(); // never
