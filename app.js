import Test from './test';

const title = "hello world";
let count = [];

let test = new Test("praveen","01515");
let array = [];
array = test.returnArr();

for(let i =0; i<array.length;i++){
	count[i]=(array[i]);
}


document.getElementById("title").innerHTML = title;
document.getElementById("name").innerHTML = test.myName();
document.getElementById("id").innerHTML = test.myId();
document.getElementById("arr").innerHTML = `Your name is ${count[0]} and Your id is "${count[1]}"`;
const url = "http://localhost:1337/user";
// fetch(url,{
//     method: 'get'
// })
// .then(data => data.json())
// .then(users => {
// 	console.log(users);
//   let html = `
//    <thead>
//   <tr>
//   <th>ID</th>
//   <th>Name</th>
//   <th>&nbsp&nbsp&nbspCountry</th>
//   <th>Email</th>
//   </tr><br>
// </thead>`;
//   let count =0;

//   users.forEach(user => html += `
 
//    <tbody>
//    <tr>
//    <td>${user.id}</td>
//    <td>&nbsp&nbsp&nbsp&nbsp&nbsp${user.name}</td>
//    <td>&nbsp&nbsp&nbsp${user.country}</td>
//    <td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${user.email}</td>
//    </tr>
//    </tbody>`);
   
//   document.getElementById("user").innerHTML = html;
  
// })
// .catch(e =>  console.log(e)
// );
