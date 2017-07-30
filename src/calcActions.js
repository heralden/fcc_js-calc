const actionHandler = (action, inp, sub) => {
  if (action === 'AC') return allClear();
  else if (action === 'CE') return clearEntry(sub);
  else { 

    if (alreadyEqualed(sub))
      sub = [].concat(last(sub));

    if (action === '-' 
      || action === '/'
      || action === '•'
      || action === '+')
      return operator(action, inp, sub);

    if (action === ',')
      return decimal(inp, sub);

    if (action === '=')
      return equal(action, inp, sub);

    return number(action, inp, sub);
  }
}

export default actionHandler;

const allClear = () => ({
  input: 0,
  subinput: [ 0 ]
});

const clearEntry = sub => {
  if (alreadyEqualed(sub)) {
    return {
      input: last(pop(pop(sub))),
      subinput: sub.length <= 1 ? [ 0 ] : pop(pop(sub))
    };
  } else {
    return {
      input: last(pop(sub)) || 0,
      subinput: sub.length <= 1 ? [ 0 ] : pop(sub)
    };
  }
}

const operator = (operand, inp, sub) => ({
  input: isNaN(inp) ? inp : operand,
  subinput: isNaN(last(sub)) ? sub : sub.concat([ international(operand) ])
});

const decimal = (inp, sub) => ({
  input: isNaN(inp) ? inp : concatDecimal(inp, '.'),
  subinput: isNaN(last(sub)) ? sub : [].concat(pop(sub), concatDecimal(last(sub), '.'))
});

const equal = (action, inp, sub) => {
  if (isNaN(last(sub))) return {
    input: inp,
    subinput: sub
  };
  // eslint-disable-next-line
  let res = eval(sub.reduce((acc, e) => acc.concat(e), ""));
  return {
    input: res,
    subinput: [].concat(sub, action, res)
  };
}

const number = (num, inp, sub) => ({
  input: isNaN(inp) ? num : concatAndParse(inp, num),
  subinput: isNaN(last(sub)) ? [].concat(sub, [ parseFloat(num) ])
    : [].concat(pop(sub), concatAndParse(last(sub), num))
});

const pop = arr => arr.slice(0, -1)
const last = arr => arr[arr.length - 1]
const international = e => "".concat(e).replace(',', '.').replace('•', '*')
const concat = (a, b) => "".concat(a, b)
const concatAndParse = (a, b) => parseFloat("".concat(a, b))
const concatDecimal = (inp, dec) => "".concat(inp).includes('.') ? inp : concat(inp, dec)
const alreadyEqualed = sub => sub.includes('=')
