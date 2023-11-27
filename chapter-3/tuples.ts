const seasons: string[] = ["spring", "summer", "fall", "winter"];

let simpleState: string;

function simpleUseState(initialState: string) {
  if (!simpleState) {
    simpleState = initialState;
  }
  function updateState(newState: string) {
    simpleState = newState;
  }
  return [simpleState, updateState];
}

const [username, setUsername] = simpleUseState("John"); // setUsername can be a string or a function because array element type can vary

function simpleUseStateWithTuple(
  initialState: string,
): [string, (newString: string) => void] {
  // set return type as a fixed-sized tuple
  if (!simpleState) {
    simpleState = initialState;
  }
  function updateState(newState: string) {
    simpleState = newState;
  }
  return [simpleState, updateState];
}

const [username2, setUsername2] = simpleUseStateWithTuple("John"); // setUsername2 is inferred as a function
