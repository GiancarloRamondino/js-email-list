const emailList = document.getElementById('email');

for (let i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
        const emailItem = document.createElement('li');
        emailItem.textContent = resp.data.response;
        emailList.appendChild(emailItem);
    });
}