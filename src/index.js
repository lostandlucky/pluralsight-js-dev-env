import './index.css';

import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

		global.document.getElementById('users').innerHTML = usersBody;

		//target anything with class delete user
		const deleteLinks = global.document.getElementsByClassName('deleteUser');

		// Must use array.from to create a real array from a DOM collection
		// getElementsByClassname only returns an "array like" object

		//Iterate through list of delete links
		Array.from(deleteLinks, link => {
			link.onclick = function(event){  // attach click handler to each one
				const element = event.target;
				event.preventDefault(); // so the click doesn't produce any change the url
				deleteUser(element.attributes["data-id"].value); //Call delete user
				const row = element.parentNode.parentNode;  //remove row we just click from the DOM
				row.parentNode.removeChild(row);
			};
		});
});
