// 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면 됨

// if문 비교문
// if(true){
// 여기 있는 구문을 실행시키는 조건은
// if () 괄호안에 true or false의 차이로 실행을 시킨다.
//    console.log()
   // 불이 꺼져있으면 실행될 일 자체가 없다.
   // 불이 켜져있으면 실행 될수도 있다.
   // 여기 내용을 실행 시키고 싶을 때도 있고, 실행시키고 싶지 않을 때도 있는데.
   // 괄호에 연산자를 대입하면 값을 비교하면서 실행 시키거나
   // 실행 안되게 할 수 있음.
// }
// let age = 1;
// let age2 = 2;

// age = 나
// age보다 age2가 값이 크니까 true라서 if문 조건에 맞음.
// if(age < age2){
    // 조건이 맞으니까 실행
// console.log("내 나이가 작구나")
// }

// false면 신행 시키고 싶은데..

// else if가 아닐 때 false
// if(age < age2){
    // 조건이 맞으니까 실행
// console.log("내 나이가 작구나");
// }else{
    // false면 else문 실행
//    console.log("나는 else문");
// }

// 참과 거짓말고 더 없는지 비교를 더 하고 싶은데
// if(age < age2){
    // age보다 age2가 더 커야지 true 여기선 5,5 같은 값이니까
    // false가 나온다.
    // if문이 맞으면 이코드 실행
//   console.log("아");
// }else if(age == age2){
    // if문이 틀리면 여기로 와서 조건이 맞는지 확인 후 맞으면 싱행
    // 5 == 5이니까 값이 같다 true
    // 여기를 실행
    // console.log("나는 else if문");
// }else{
    //else if문의 조건이 맞지 않으면 else실행
    // console.log("나는 두번째 else문");
// }

// 반복문 for문
// 여러번 반복 실행해야 할 구문이 있을 때 사용한다.
// 반복문중에 하나이고
// let b = 9;

// 변수 선언하고, 값을 확인하고, for문 안에 있는 구문을 실행하고 나서
// 값을 증가시킨다.
// 증가 시킨다음에 비교를 하고 true면 구문 다시 실행
// 다시 실행후에 증가 시키고 비교문 확인
// 증가되다가 false로 안맞게 되면 그때 반복문 종료
// 무한으로 반복시키면 사이트가 터지므로 주의 (조건식 잘 확인하기.)


// for(let a = 3; a <= b ; a++){
    // console.log(a);
// }









// for(let c = 1; c <= d ; c++){ 
//     console.log(c * d);

// }
// let f= 2;
// for(let e = 9; e <= f ; c++){
//     console.log(e * f);
// }



// let chung = []
// let 

// else if("students") {
    
    // }
    
    // for
    
    // let a = 1;
    
    // for (let i = 1; i <=60; i++){
        
        //     console.log( i);
// }

// let d = 9; 


// 구구단 만들기
// 1. 2~9 까지가 있네? 2 증가해서 9까지도 만들어야지
// 2. 2 x 1 = 2 , 2 X 2 =4 9까지곱한다. 그러면 1부터 9까지 숫자가 필요하겠구나

let a = 4;

for (let o = 2; o < 10; o++) {
        
    console.log( o + "단"); 
    for (let i = 1; i < 10; i++) {
        console.log( o + "*" + i  + "="+ o * i);
    }
}

let d = 9; 



// for(let a = 1; a <= 60; a++){
//     if(a%3 == 0){
//         console.log("짝");
//     }
//     else{
//        console.log(a);
//     }
// }

// let students = ["가","나","다","라","마","바"];
// let award = ["나","마"];

// for(let i = 0; i < students.length; i++){

//     for(let j = 0; j < award.length; j++){
//         if(students[i] == award[j]){
//             console.log(students[i]);
//         }
//     }

// }







