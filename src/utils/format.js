export function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})0(?!\d))/g,",")
}