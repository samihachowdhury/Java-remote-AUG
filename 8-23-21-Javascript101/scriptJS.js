// // let numberList = [1,2,3,4,5]
// // let booleanArray = [true, false]
// let studentArray = ['John','kim','Steve']

// // console.log(studentArray[0])
// // console.log(studentArray)

// // push: add an item to the array
// studentArray.push('Zack')

// // console.log(studentArray)

// // pop: removes the last element from the array

// let newStudent = studentArray.pop()

// // unshift: adds an item to the front of an array

// // studentArray.unshift('Shane')
// // console.log(studentArray)

// // shift: removes an item from the front of an array 
// // let rmStudent = studentArray.shift()




// studentArray[4] = "James"

// studentArray[2] = "Tom"
// // console.log(studentArray)


// // let num = [10, 100, 50, 2]

// /** 
//  * indexOf: finds the index position of the item in an array
// if the item is not there, it will return to return -1 
// */
// // console.log(   num.indexOf(60)   )

// /** slice : needs to accept 2 arguments; start and end 
//  * * and returns a new array. this new array will hold (makes a copy of it, but never mutates it)
//  * the elements from the given start index up the 
//  * one right before the specified end index
//  */

//  let num = [1,2,3,4,5]

//  let items = num.slice(0,2);

// //  console.log(items)
// //  console.log(num)

// // removes an element from the array and inserts new element in their place

// let itemNum = num.splice(1,2,8,10)

// console.log(itemNum)

// console.log(studentArray.length)

// for(let i = 0; i < studentArray.length; i++) {
//     console.log(studentArray[i])
// }

// studentArray.forEach(function(item, index){

// console.log(item)})

// let names = ['Joe','Ann']

// names.toString()
// let newNames = names.join(' & ')

// console.log(newNames)

// let a = [5, 2, 8]

// console.log(a.sort())
// console.log(a.reverse())

// let course = {

//     name: 'Java Script',
//     computerLg: true,
//     students: [ 'Rob', 'Kate'],
//     instructor:{
//         name: 'Dave',
//         favLang: 'java script'

//     }
// }

// console.log(course)

// let course = {
// 	name: 'JavaScript Applications',
// 	awesome: true,
// 	teachers: ['Assaf', 'Shane'],
// 	students: [
// 		{
// 			name: 'Steve',
// 			computer: {
// 				OS: 'Linux',
// 				type: 'laptop'
// 			}
// 		}
// 	]
// };

// console.log(course.students[0].computer.OS)
// // console.log(course['students'][0]['computer'] ['OS'])


// course.name = "JS 101"

// console.log(course)


let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// Name of the course ('JavaScript Applications')
console.log(course.name)
// Name of the second teacher ('Shane')
console.log(course.teachers[1])
// Name of the first student ('Steve')
console.log(course.students[0].name)
// Katy's computer type ('macbook')
console.log(course.students[1].computer.type)
// The preReq equipment object
console.log(course.preReqs.equipment)
// The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1])
// String listing the OSOptions separated by 'or' ('linux or osx')
console.log(course.preReqs.equipment.OSOptions.join(" or "))
// An array of all the students that are using osx

// Ai 
console.log([
    course.students.slice(1, 3)[0].name,
    course.students.slice(1, 3)[1].name,
  ]);

//   Daniel 
  let osx = [];
let students = course.students;

for(let i = 0; i < students.length; i++){
    if(students[i].computer.OS === "OSX"){
        osx.push(students[i].name);
    }
}

// students.forEach(function(item){
//     if(students)[item].computer.OS === "OSX"){

//         osx.push(students[item].name);
//     }
// }

console.log(osx);