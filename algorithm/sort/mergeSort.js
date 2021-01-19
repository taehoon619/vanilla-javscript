function mergeSort (array) {
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);

    const left = array.slice(0, mid);
    const right = array.slice(mid); // 반으로 쪼개서

    return merge(mergeSort(left), mergeSort(right)); // 두개로 나눈 배열 ?? 

    function merge (left, right) {
        const resultArray = []; // 결과
        let leftIndex = 0; // 첫번쨰 인덱스
        let rightIndex = 0; 

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex)); // 최종으로 합쳐진 배열
        // .concat 두개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수
    }
}
