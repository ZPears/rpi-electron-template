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
  keyCode: number
}

const mappings: Array<Mapping> = [
  { input: PicadeInput.JOYSTICK_UP, keyCode: 38 },
  { input: PicadeInput.JOYSTICK_LEFT, keyCode: 37 },
  { input: PicadeInput.JOYSTICK_DOWN, keyCode: 40 },
  { input: PicadeInput.JOYSTICK_RIGHT, keyCode: 39 },
  { input: PicadeInput.BUTTON_A, keyCode: 90 },
  { input: PicadeInput.BUTTON_B, keyCode: 16 },
  { input: PicadeInput.BUTTON_X, keyCode: 18 },
  { input: PicadeInput.BUTTON_Y, keyCode: 17 },
  { input: PicadeInput.BUTTON_LB, keyCode: 32 },
  { input: PicadeInput.BUTTON_RB, keyCode: 88 },
  { input: PicadeInput.BUTTON_LT, keyCode: 27 },
  { input: PicadeInput.BUTTON_RT, keyCode: 13 },
  { input: PicadeInput.START, keyCode: 79 },
  { input: PicadeInput.SELECT, keyCode: 73 }
]

const picadeToKeyCode: Map<PicadeInput, number> = new Map(
  mappings.map(mapping => [mapping.input, mapping.keyCode])
)

const keyCodeForPicadeInput = (picadeInput: PicadeInput) => {
  return picadeToKeyCode.get(picadeInput);
}

export default keyCodeForPicadeInput;
