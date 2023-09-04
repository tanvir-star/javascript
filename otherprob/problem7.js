const months = ["Mar", "Jan", "Feb", "Dec"];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(monthNames.indexOf("Jan"))
console.log(monthNames.indexOf("Mar"))
months.sort((a, b) => {
  console.log('aa---->', a);
  console.log('----:', b)
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  console.log('monthNames.indexOf(a)', monthNames.indexOf(a))
  console.log('---...', monthNames.indexOf(b));
  console.log('--->', monthNames.indexOf(a) - monthNames.indexOf(b))
  return monthNames.indexOf(a) - monthNames.indexOf(b);
});
 
console.log(months);
