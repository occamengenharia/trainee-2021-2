async function fetchData(){
    // Recuperar dados
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const result = data.results[0];

    // Formatar dados
    const name = result.name.first + ' ' + result.name.last;
    const picture = result.picture.large;

    // Adicionar a foto de perfil no HTML
    const imageContainer = document.querySelector('.profile_picture');
    const img = document.createElement('img');
    img.src = picture;
    imageContainer.appendChild(img);

    // Adicionar nome de usuário no HTML
    const usernameContainer = document.querySelector('.user_name');
    const username = document.createElement('p');
    username.innerText = name;
    usernameContainer.appendChild(username)
}

fetchData();