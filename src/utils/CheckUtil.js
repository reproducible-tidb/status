function CheckSHA(shalist) {
  return [...new Set(shalist)].length == 1;
}
export { CheckSHA };
