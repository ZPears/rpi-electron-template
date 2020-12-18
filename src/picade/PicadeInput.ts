// Provides mappings for the Picade joystick / button inputs to KeyboardEvent keyCodes.

export enum PicadeInput {
  JOYSTICK_UP,
  JOYSTICK_LEFT,
  JOYSTICK_RIGHT,
  JOYSTICK_DOWN,
  BUTTON_A,
  BUTTON_B,
  BUTTON_X,
  BUTTON_Y,
  BUTTON_LB,
  BUTTON_RB,
  BUTTON_LT,
  BUTTON_RT,
  SELECT,
  START
}

interface Mapping {
  input: PicadeInput,
  keyCode: number,
  keyName: string
}

const mappings: Array<Mapping> = [
  { input: PicadeInput.JOYSTICK_UP, keyCode: 38, keyName: "ArrowUp" },
  { input: PicadeInput.JOYSTICK_LEFT, keyCode: 37, keyName: "ArrowLeft" },
  { input: PicadeInput.JOYSTICK_DOWN, keyCode: 40, keyName: "ArrowDown" },
  { input: PicadeInput.JOYSTICK_RIGHT, keyCode: 39, keyName: "ArrowRight" },
  { input: PicadeInput.BUTTON_A, keyCode: 90, keyName: "z" },
  { input: PicadeInput.BUTTON_B, keyCode: 16, keyName: "Shift" },
  { input: PicadeInput.BUTTON_X, keyCode: 18, keyName: "Alt" },
  { input: PicadeInput.BUTTON_Y, keyCode: 17, keyName: "Control" },
  { input: PicadeInput.BUTTON_LB, keyCode: 32, keyName: " " },
  { input: PicadeInput.BUTTON_RB, keyCode: 88, keyName: "x" },
  { input: PicadeInput.BUTTON_LT, keyCode: 27, keyName: "Escape" },
  { input: PicadeInput.BUTTON_RT, keyCode: 13, keyName: "Enter" },
  { input: PicadeInput.START, keyCode: 79, keyName: "o" },
  { input: PicadeInput.SELECT, keyCode: 73, keyName: "i" }
]

const picadeToKeyCode: Map<PicadeInput, number> = new Map(
  mappings.map(mapping => [mapping.input, mapping.keyCode])
)

const picadeToKeyName: Map<PicadeInput, string> = new Map(
  mappings.map(mapping => [mapping.input, mapping.keyName])
)

const keyCodeForPicadeInput = (picadeInput: PicadeInput): number => {
  return picadeToKeyCode.get(picadeInput)!;
}

export const keyNameForPicadeInput = (picadeInput: PicadeInput): string => {
  return picadeToKeyName.get(picadeInput)!;
}

export default keyCodeForPicadeInput;
