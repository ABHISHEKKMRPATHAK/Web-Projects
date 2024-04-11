fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    const rep = response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
