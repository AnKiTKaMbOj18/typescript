interface LabelledValue{
    label:string;
}
function printLabel(labelled:LabelledValue){
    console.log(labelled.label);
}
var obj={size:10,label:"size label"};
printLabel(obj);
