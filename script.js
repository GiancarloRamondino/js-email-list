const showEmail = document.getElementById('email');


axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
    console.log(resp.data.response);
    showEmail.innerHTML = resp.data.response;
})

