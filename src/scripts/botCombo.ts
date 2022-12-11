export function createBotCombo() {
  const rand = Math.round(Math.random() * 10);
  switch (rand) {
    case 1:
      return [4, 0, 2, 6, 8, 1, 3, 5, 7];
      break;
    case 2:
      return [0, 8, 2, 6, 4, 3, 5, 7, 1];
      break;
    case 3:
      return [0, 8, 6, 2, 4, 5, 3, 7, 1];
      break;
    case 4:
      return [2, 6, 0, 8, 4, 1, 7, 5, 3];
      break;
    case 5:
      return [6, 2, 0, 8, 4, 1, 7, 3, 5];
      break;
    case 6:
      return [6, 2, 8, 0, 4, 1, 5, 7, 3];
      break;
    case 7:
      return [8, 0, 6, 2, 4, 5, 7, 1, 3];
      break;
    case 8:
      return [8, 0, 2, 6, 4, 5, 7, 3, 1];
      break;
    case 9:
      return [2, 6, 8, 0, 4, 7, 3, 5, 1];
      break;
    default:
      return [4, 0, 2, 6, 8, 1, 3, 7, 5];
  }
}
