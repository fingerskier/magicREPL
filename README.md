# magicREPL
REPL for Node that automatically saves code and state.

## Context & State

The REPL has two different things going on:
- Context; that's just what I call it...its the code you type in at the prompt
- State; an object behind the scenes with stuff in it that you can access from the REPL


## Of Interest
`_` is, by default, assigned the result of the most recently evaluated expressions
`_error` ~ ditto
`ctrl + R` searches backwards
`ctrl + S` searches forwards
