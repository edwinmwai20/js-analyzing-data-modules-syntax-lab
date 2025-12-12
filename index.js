require('datejs')

function combineUsers(...args) {
  const combineObjects ={users:[]}

  for(const arr of args) {
    combineObjects.users.push(...arr)
  }

  combineObjects.merge_date = new Date().toString("M/d/yyyy")

  return combineObjects;

}
console.log(combineUsers)

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};