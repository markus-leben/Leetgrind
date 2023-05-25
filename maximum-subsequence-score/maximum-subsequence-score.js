/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    //START of heap class
    class Heap{
        constructor(type){
            this.type = type;
            this.data = [];
            this.data[0] = undefined;
        }
        print(){
            for(let i=1;i<this.data.length;i++){
                console.log(this.data[i])
            }
        }
        getSize(){
            return this.data.length-1;
        }
        insert(value){
            this.data.push(value);
            if(this.data.length==2){
                return ;
            }
            let lastIndex = this.data.length-1;
            while(this.data[Math.floor(lastIndex/2)]!==undefined && this.compare(this.data[lastIndex],this.data[Math.floor(lastIndex/2)])>0){
                let temp = this.data[Math.floor(lastIndex/2)];
                this.data[Math.floor(lastIndex/2)] = this.data[lastIndex];
                this.data[lastIndex] = temp;
                lastIndex = Math.floor(lastIndex/2);
            }
        }
        //This returns a positive number if a is greater than b. Here meaing of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b . 
        compare(a,b){
            if(this.type==="min"){
                if(Array.isArray(a) && Array.isArray(b)){
                    return b[0]-a[0];
                }else{
                    return b-a;
                }
            }else{
                if(Array.isArray(a) && Array.isArray(b)){
                    return a[0]-b[0];
                }else{
                    return a-b;
                }
            }
        }
        removeTop(){
            let max = this.data[1];
            if(this.getSize()>1){
                this.data[1] = this.data.pop();
                this.heapify(1);
            }else{//If the size is 0 then just remove the element, no shifting and hipify will be applicable
                this.data.pop();
            }
            return max;
        }
        getTop(){
            let max = null;
            if(this.getSize()>=1){
                max = this.data[1];
            }
            return max;
        }
        heapify(pos){
            if(pos*2>this.data.length-1){
                //That means element at index 'pos' is not having any child
                return;
            }
            if(
                (this.data[pos*2]!==undefined && this.compare(this.data[pos*2],this.data[pos])>0)
              || (this.data[pos*2+1]!==undefined && this.compare(this.data[pos*2+1],this.data[pos])>0)
              ){
                if(this.data[pos*2+1]===undefined || this.compare(this.data[pos*2+1],this.data[pos*2])<=0){
                    let temp = this.data[pos*2];
                    this.data[pos*2] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2);
                }else{
                    let temp = this.data[pos*2+1];
                    this.data[pos*2+1] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2+1);
                }
            }
        }
    }
    //END of heap class
    
    let arr2=[];
    for(let i=0;i<nums2.length;i++){
        arr2.push([i,nums2[i]]);
    }
    arr2.sort(function(a,b){return b[1]-a[1]});
    
    let currentRate,sum=0,max=0;
    let minHeap = new Heap('min');
    for(let i=0;i<nums2.length;i++){
        let index = arr2[i][0];
        currentRate = nums2[index];//This is the minimum number from nums2 so far
        sum += nums1[index];
        minHeap.insert(nums1[index]);
        if(minHeap.getSize()>k){
            let top = minHeap.removeTop();
            sum -= top;
        }
        if(minHeap.getSize()===k){//We have choosen k elements
            max = Math.max(max,sum*currentRate);
        }
    }
    return max;
};

// var generateKeySort = (key) => ((a,b) => {
//         if (a[key] > b[key]) {
//             return -1;
//         }
//         if (a[key] < b[key]) {
//             return 1;
//         }
//         return 0;
// })

// var maxScore = function(nums1, nums2, k) {
//     var combinedArr = []
//     for (let i = 0; i < nums1.length; i++) {
        
//         combinedArr.push({nums1:nums1[i], nums2:nums2[i]})
//     }
//     combinedArr.sort(generateKeySort('nums2'))
    
//     // get the first solution option
//     var elements = combinedArr.slice(0, k)
//     // get the least nums2 in that solution
//     var leastNums2 = elements[elements.length-1].nums2
//     var nums1Total = 0
//     for (let elem of elements) {
//         nums1Total += elem.nums1
//     }

//     // sort that solution option by its n1s
//     elements.sort(generateKeySort('nums1'))
//     var leastNum1Index = elements.length-1

//     for (let i = k; i < combinedArr.length; i++) {
//         // if replacing the least num1 number would be worth it
//         var newNums1Total = nums1Total + combinedArr[i].nums1 - elements[leastNum1Index].nums1
//         var newLeastNums2 = combinedArr[i].nums2
//         if (nums1Total*(leastNums2) < 
//         (nums1Total+ combinedArr[i].nums1-elements[leastNum1Index].nums1)*combinedArr[i].nums2) {
//             console.log(combinedArr[i])
//             // replace an element 
//             // change nums1Total by subtracting the old element and adding the new
//             nums1Total = nums1Total + combinedArr[i].nums1 - elements[leastNum1Index].nums1
//             // change leastNums2 to be this elements nums2
//             leastNums2 = combinedArr[i].nums2
//             // make the iter element replace it
//             elements[leastNum1Index] = combinedArr[i]
//             //leastnums2 might change
//             // decrement the leastnum1index
//             elements.sort(generateKeySort('nums1'))
//             leastNum1Index = elements.length-1
//         }
//     }
//     console.log(elements[leastNum1Index])
//     console.log(`${nums1Total} * ${leastNums2}`)
//     return nums1Total * leastNums2

// };

