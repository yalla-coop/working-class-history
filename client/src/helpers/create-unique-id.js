function uniqueID() {
  return String(
    Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
  ).slice(0, 6);
}
export default uniqueID;
