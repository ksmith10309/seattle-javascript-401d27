# Bitmap Transformer

## Module Descriptions

### Bitmap Module
- This module requires the dictionary module
- This module exports a Bitmap class
- The Bitmap class constructor method has an arity of 1
    - The argument should be the file path
    - The constructor method stores the file path on the bitmap instance
- The Bitmap class has two methods, parse and transform
- The parse method has an arity of 1
    - The argument should be the buffer
    - The parse method stores the type, the bits per pixel, the DIB header size, the starting address of the pixel array, and the buffer of the file on the bitmap instance
- The transform method has an arity of 1
    - The argument should be the name of the transformation to be performed
    - The transform method uses the object exported by the dictionary module to invoke the transformation on the bitmap instance
    - The transform method then stores the new file name on the bitmap instance

### Dictionary Module
- This module exports a single object
- This object contains all the transformations that are available in key/value pairs
- The keys are the transformation names
- The values are the transformation modules

### Transform Module
- This module requires the fs module
- This module exports a single function
- The function has an arity of 3
- The first argument should be the file path
- The second argument should be the name of the transformation to be performed
- The third argument should be a bitmap instance created by the Bitmap class
- The function uses the fs module to read the file
- On success, the function calls for the buffer to be parsed and for the transformation to be performed
- The function then uses the fs module to write a new file

### Transformation Modules
- Each of these modules export a single function
- The function has an arity of 1
- The argument should be a bitmap instance created by the Bitmap class
- The argument should come from a BMP file that has 8 bits per pixel
    - If so, the function performs a transformation on the buffer
    - If not, the function throws an error

---

## Code Explanation
`const [file, operation] = process.argv.slice(2);`

When the command line is used to launch a Node.js application, process.argv returns an array of the command line arguments passed. For example, given the following command:

`node index.js ./assets/baldy.bmp greyscale`

process.argv would return an array with the path to Node as the first element, the path to index.js as the second element, './assets/baldy.bmp' as the third element, and 'greyscale' as the fourth element.

Therefore, process.argv.slice(2) would return an array with only the third and fourth element of process.argv:

`['./assets/baldy.bmp', 'greyscale']`

For this example, the line of code can then be rewritten as:

`const [file, operation] = ['./assets/baldy.bmp', 'greyscale'];`

const file would be assigned the string './assets/baldy.bmp', and const operation would be assigned the string 'greyscale'.