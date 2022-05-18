/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const fetchShowUsers = async (login, avatar_url) => {
    const response = await fetch(ENDPOINT);
    const userList = await response.json();

    addUsersList(userList); 
}

function addUsersList(usersList) {
    const userListContainer = document.getElementById('output');

    usersList.forEach((user) => {
        const userId = document.createElement('div');
        userId.innerText = user.login;

        const userAvatar = document.createElement('img');
        userAvatar.src = user.avatar_url;
        userAvatar.style.width = '5rem'
        userAvatar.style.height = '5rem'
        userAvatar.style.margin = 'auto'

        const userCard = document.createElement('div');
        userCard.append(userAvatar, userId);
        userListContainer.append(userCard)
    })
}
 fetchShowUsers();
