// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, melon, banana, cherry'
    const result = fruits.split(',', 2); // 스플릿은 구분을 꼭 해주자.
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 배열 자체도 바뀐걸 볼수있다. 배열자체가 바뀐다!!
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5]
    // const result = array.splice(0, 2); // 어디서 부터 몇개를 지울것인가
    const result = array.slice(2, 5) // 시작 부터 어디까지
    console.log(result); [3,4,5] // splice 배열 자체를 바꾼다, slice는 배열에서 리턴하고 싶은 부분
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]

// Q5. find a student with the  score 90
{   // 두가지의 인자 콜백함수를 받는다, 첫번쨰로 찾아진 원소를 리턴한다.
    const result = students.find((student) => {
        return student.score === 90;
        console.log(student, index);
    });
}

// Q6. make an array of enrolled students
{   // 콜백함수가 true인 아이들만 모아서 전달함
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students` scores
// result should be: [45, 80, 90, 66, 88]
{   // map 배열에 있는 원소를 콜백함수를 호출하면서 콜백함수에서 가공된 새로운 값으로 변환함
    // 호출하는 함수의 파라미터는 이해하기 쉬운것으로
    const result = students.map((student) => student.score);
    console.log(result); [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{   // 배열의 요소중에 콜백함수가 트루인지 펄스인지 리턴해주는 거, 어떤것이라도 하나 만족은
    console.clear()
    const result = students.some((student) => student.score < 50);
    console.log(result)
    // every는 조건을 모슨 원소가 통과해야 true, 모든 조건의 만족 
    const result2 = students.every((student) => student.score < 50);
    console.log(result2)
}

// Q9. compute students` average score
{   // reduce 콜백함수 or 이니셜 벨류를 전달, 콜백함수는 누적된 값을 리턴
    // 배열의 값을 누적할때 (prev, curr)
    const result = students.reduce((prev, curr) => {
        console.log('-------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0 ) // 0 부터 시작하겠다 (세팅)
    // const result = student.reduce((prev, curr) => prev + curr.score, 0); 간단하게
    console.log(result / students.length); // reduceRight() reduce의 반대로 값을 누적하는 것
}

// Q10. make a string containing all the scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student => student.score))
    .sort((a, b) => a - b) // 첫번째가 두번째보다 작다 ==> -밸류 (작은것이 앞으로), +밸류 
    .join();
    console.log(result);
}