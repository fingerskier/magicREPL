const Data = require('datalive')
const repl = require('repl')


function isRecoverableError(error) {
  if (error.name === 'SyntaxError') {
    return /^(Unexpected end of input|Unexpected token)/.test(error.message);
  }
  return false;
}

function magicEval(cmd, context, filename, callback) {
  let result;
  try {
    result = eval(cmd);
  } catch (e) {
    if (isRecoverableError(e)) {
      return callback(new repl.Recoverable(e));
    }
  }
  callback(null, result);
}

function magicWriter(output) {
  return output
}



const magicRepl = repl.REPLServer({
  eval: magicEval,
  prompt: 'code| ', 
  useColors: true,
  writer: magicWriter,
})

// setup the main, usable thing
magicRepl.context.addState = name=>{
  magicRepl.context[name] = new Data(name)
}
