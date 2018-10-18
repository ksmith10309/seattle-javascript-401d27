## Module Description

### Reader Module
- This module exports a single function.
- The function has an arity of 2.
- The first argument should be an array of three file paths.
- The second argument should be an error-first callback.
- The function should resolve an array of strings loaded from each file using the error-first callback.
- The array of strings should be in the same order as the array of file paths.
- On failure, the function should invoke the callback with an error as the argument.
- On success, the function should invoke the callback with null as the first argument and the array of strings as the second argument.
