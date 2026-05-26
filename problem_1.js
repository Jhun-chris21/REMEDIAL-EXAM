// Problem 1 Javascript File
function isValidParentheses(str) {

  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {

    // Opening brackets
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }

    // Closing brackets
    else if (char === ')' || char === ']' || char === '}') {

      // Check if last opening bracket matches
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets matched
  return stack.length === 0;
}
