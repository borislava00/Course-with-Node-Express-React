function demo() {
    const resultsElem = document.getElementById("results");
    fetch("./users.json")
        .then(userResponse => userResponse.json())
        .then(users => {
            console.log(users);
            return fetch(`https://api.github.com/users/%{users[0].username}`)
        }).then(githubResponse => githubResponse.json())
        .then(gitUser => {
            console.log(gitUser);
            const img = new Image();
            img.src = gitUser.avatar_url;
            resultsElem.appendChild(img);
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 100000, img)
            });
        }).then(img => {
            resultsElem.removeChild(img);
        }).finally(() => console.log('Demo finished.'));
}

demo();