/* Boas práticas de escrita
      camelCase
      PascalCase
      snake_case */

const LinksSocialMedia = {
    github: "danilosilvaadriao",
    youtube: "UCKzu7hireSkWmQWR-93hyJA",
    facebook: "danilosilvaadriao",
    instagram: "danilosilvaadriao",
    twitter: "danilosadriao",
};

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class");

        li.children[0].href;
        ("https://${social}.com/${LinksSocialMedia[social]}");

      //  alert(li.children[0].href);
    }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = "https://api.github.com/users/${LinksSocialMedia.github}";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

 getGitHubProfileInfos();
