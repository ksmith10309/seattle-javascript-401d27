## Tools and Context
The list module exports a List constructor. The List constructor consists of 6 methods: push(), pop(), slice(), map(), filter(), and reduce().

### Push Method
- This is a method of arity 1.
- This method pushes the argument to the end of the list and then returns the length of the list.
- If no argument is provided, no changes are made and the length of the list is returned.

### Pop Method
- This is a method of arity 0. 
- This method pops off the last element of the list and returns it.
- If the list is empty, the method returns undefined.
- If any arguments are provided, an error will be thrown.

### Slice Method
- This is a method of arity 2.
- This method returns a shallow copy of the list.
- The first argument represents the starting index.
- The second argument represents the ending index that is not included.
- If no arguments are provided, a copy of the entire list is returned.
- If only one argument is provided, the method copies through to the end of the list.
- If the first argument is greater than the length of the list, the method returns an empty list.
- If the second argument is greater than the length of the list, the method copies through to the end of the list.
- A negative argument represents the offset from the end of the list.

### Map Method
- This is a method of arity 1.
- The argument should be a callback function.
- This method iterates over the list and runs the callback for each element.
- If a callback function is not provided as the argument, an error will be thrown.

### Filter Method
- This is a method of arity 1.
- The argument should be a callback function.
- This method iterates over the list and checks if the callback is true for each element.
- If a callback function is not provided as the argument, an error will be thrown.

### Reduce Method
- This is a method of arity 2.
- The first argument should be a callback function.
- The second argument represents the initial value.
- This method iterates over the list and reduces according to the callback.
- If a callback function is not provided as the first argument, an error will be thrown.
- If an initial value is not provided, the method sets the initial value to be the first element of the list.
