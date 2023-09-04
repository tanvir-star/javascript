var A1  = ["1","2","3","4"];

var A2 = [
    {label:"one", value:"1"},
    {label:"two", value:"2"},
    {label:"three", value:"3"},
    {label:"four", value:"4"},
    {label:"five", value:"5"},
    {label:"six", value:"6"},
];
const result = A2.filter(o =>{ 
    return A1.includes(o.value)
});
console.log('result', result);