export default (...args: any[]): void => {
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(...args)
  }
}
