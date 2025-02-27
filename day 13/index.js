//foreach

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,]

//arr.forEach((el, index)=>{
//    console.log(el, index)
//});

//console.log(ans)

//let ans =arr.map((el, i)=>{
//    return (el,i)
//})

//console.log(ans);

//filter

//let output = arr.filter((el, i)=>{
  //  return el%2==0 && el !==6;
//});

//let output = arr.filter((el, i)=>{
 //   return el%5==0;
//}).map((el, index)=>{
 //   return el*2;
//}).reduce((acc, el)=>{
 //   return acc+el;
//}).map((el, index)=>{
 //   return el*2;
//})
//console.log(output)

//console.log(output)

//reduce

//let output = arr.reduce((acc, el)=>{
  //  return acc+el
//}, 1);

//console.log(output)

let arr = [3]

let ans = arr.sort((a+b))

let data =[
    {name:"watch", price:2000, desc:"good watch",rating: 4 },
    {name:"shoe", price:1200, desc:"good shoe",rating: 3 },
    {name:"car", price:2000, desc:"good car",rating: 4.2 },
    {name:"laptop", price:1200, desc:"good laptop",rating: 2 },
    ]

data.sort((a,b)=>{
    return a.price-b.price
})

console.log(data)
data.sort((a,b)=>{
    if(a.name<b.name){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
})
console.log(data)



