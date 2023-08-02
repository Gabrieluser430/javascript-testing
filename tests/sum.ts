export default  function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0)
}