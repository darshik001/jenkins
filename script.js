let sortarr = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0]
    let left = []
    let right = []

    arr.forEach((element,index) => {
        if (index === 0) {
            return
        }
        if (element < pivot) {
           left.push(element) 
        }else{
            right.push(element)
        }
    })
    return [...sortarr(left),pivot,...sortarr(right)]
}




 let occurrence = (arr,val)=>{
  let lowerBound = () => {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < val) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; 
};


  let upperBound = () => {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= val) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; 
};
  
  let first = lowerBound();
  let last = upperBound() ;
  let count = (first < arr.length && arr[first] === val) ? (last - first ) : 0;

  return { first, last, count };
 }

let arr = [2,5,4,2,7,5,1,3,4,2,6,9,8,7]
let sorted = sortarr(arr)

console.log(occurrence(sorted,2))
console.log(`lower Bound is:${occurrence(sorted,2).first}`)
console.log(`upper Bound is:${occurrence(sorted,2).last}`)
console.log(`Count is:${occurrence(sorted,2).count}`)








