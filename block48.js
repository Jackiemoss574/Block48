// Question 1 this is a stack problem

function isValidBrackets(s) {
    let stack = [];
    let brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let char of s) {
      if (brackets[char]) {
        // note for learning-If we see an opening bracket, we push its corresponding closing bracket onto the stack
        stack.push(brackets[char]);
      } else {

        if (stack.pop() !== char) return false;
      }
    }
  
    //note to self- If the stack is empty, all brackets were matched properly
    return stack.length === 0;
  }
  
  // Example usage found online:
  console.log(isValidBrackets("()")); // should return true
  console.log(isValidBrackets("()[]{}")); // should return true
  console.log(isValidBrackets("(]")); // should return false
  console.log(isValidBrackets("([)]")); // should return false
  console.log(isValidBrackets("{[]}")); // should return true
  
  //Question 2 : this is a Que problem

  function timeToBuyTickets(tickets, k) {
    let time = 0;
    let queue = tickets.map((t, index) => ({ tickets: t, position: index }));
    
    while (true) {
      let current = queue.shift();
      time++;
      current.tickets--;
  
      if (current.tickets === 0 && current.position === k) {
        break;
      } else if (current.tickets > 0) {
        queue.push(current);
      }
  
      if (current.position !== k) {
        k = (k - 1 + queue.length) % queue.length;
      }
    }
    
    return time;
  }
  
  const tickets = [2, 3, 2];
  const k = 2;
  console.log(timeToBuyTickets(tickets, k)); // Outputs: 6
  

  //Question 3
  //Question 4
