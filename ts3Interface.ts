function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}
let obj={size:10,label:"size 10 object"};
console.log(printLabel(obj));
