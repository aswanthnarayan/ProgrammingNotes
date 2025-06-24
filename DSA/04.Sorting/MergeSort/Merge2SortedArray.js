function Merge2SortedArray(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length;
    let i = 0
    let j =0
    let res = []
    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i])
            i++
        }
        else{
            res.push(arr2[j])
            j++
        }
    }

    while(i<m){
      res.push(arr1[i]);
      i++  
    }
    while(j<n){
        res.push(arr2[j]);
        j++
    }
    return res;
}

let arr1 = [1,3,5,7,9];
let arr2 = [2,4,6,8,10];

console.log(Merge2SortedArray(arr1,arr2));