const r = require('./index');
const dare = r.get_dare();
console.log(dare);
const truth = r.get_truth();
console.log(truth);
const t_or_d = r.get_random_question();
console.log(t_or_d);
// r.amount_of_questions(type) // type: [0 - all, 1 - truth, 2 - dare] 