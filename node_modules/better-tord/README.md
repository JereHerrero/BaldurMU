# Better-tord
This api gives you questions for the game truth or dare

## List of functions:
```
get_dare,
get_truth,
get_random_question,
amount_of_questions
```

## Sample Code
```js
const r = require('better-tord');

const dare = r.get_dare();
console.log(dare);

const truth = r.get_truth();
console.log(truth);

const t_or_d = r.get_random_question();
console.log(t_or_d);

r.amount_of_questions(type) // type: [0 - all, 1 - truth, 2 - dare] 
```