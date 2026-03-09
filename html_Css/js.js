let mark = Number(prompt("введіть оцінку"));
if (mark >= 90 && mark <= 100 ){
    alert("у тебе А");
    console.log('у тебе A');
}
else if(mark >= 80 && mark <= 89){
    alert("у тебе В");
    console.log('у тебе B');
}
else if(mark >= 70 && mark <= 79){
    alert("у тебе C");
    console.log('у тебе C');
}
else if(mark >= 60 && mark <= 69){
    alert("у тебе D");
    console.log('у тебе D');
}
if (mark < 60){
    alert('у тебе F');
    console.log('у тебе F');
}
console.log(
    'оцінка до подкупу', mark
);
mark++
console.log('оцінка після подкупу', mark);
if(mark >= 60 && mark <= 100){
    alert("ви зараховані")
    
}
else{
    alert("ваш бал занадто малий щоб вступити")
}