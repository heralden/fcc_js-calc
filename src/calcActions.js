const actionHandler = (action, inp, sub) => {
  switch (action) {
    case 'AC': return allClear(); 
    case 'CE': return clearEntry(sub);
    case '-':
    case '/':
    case '•':
    case '+':  return operator(action, sub);
    //case '=':  return equal();
    //case ',':  return decimal(inp, sub);
    default:   return number(action, inp, sub);
  }
}

export default actionHandler;

const allClear = () => ({
  input: 0,
  subinput: [ 0 ]
});

const clearEntry = sub => ({
  input: 0,
  subinput: sub.length <= 1 ? [ 0 ] : pop(sub)
});

const operator = (operand, sub) => ({
  input: operand,
  subinput: isNaN(last(sub)) ? sub : sub.concat([ international(operand) ])
});

/*
const decimal = (inp, sub) => ({
  input: concatDecimal(inp, '.'),
  subinput:
  */

const number = (num, inp, sub) => ({
  input: concatAndParse(inp, num),
  subinput: isNaN(last(sub)) ? sub.concat([ num ])
    : [].concat(pop(sub), concatAndParse(last(sub), num))
});

const pop = arr => arr.slice(0, -1)
const last = arr => arr[arr.length - 1]
const international = e => "".concat(e).replace(',', '.').replace('•', '*')
const concat = (a, b) => "".concat(a, b)
const concatAndParse = (a, b) => parseFloat("".concat(a, b))
const concatDecimal = (inp, dec) => "".concat(inp).search('.') ? inp : concat(inp, dec)
