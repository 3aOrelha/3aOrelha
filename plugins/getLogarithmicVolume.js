export default  (volume) => {
  return Math.min((Math.exp(volume / 100) - 1) / (Math.E - 1), 1)
}
