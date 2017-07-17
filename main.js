let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/showeimer");
req.addEventListener("load", function () {
  let data = JSON.parse(this.responseText);
  console.log(data);
  document.querySelector('.wrapper').innerHTML = `
    <header><h1>${data.name}</h1></header>
    <section>
      <div class="theBasics">
        <h2>The Basics</h2>
        <ul>
          <li><span>Name:</span>  ${data.name}</li>
          <li><span>GitHub URL:</span>  ${data.login}</li>
          <li><span>Email:</span>  ${data.email}</li>
          <li><span>Company:</span>  ${data.company}</li>
          <li><span>Website:</span>  ${data.blog}</li>
        </ul>
      </div>

      <div class="theStory">
        <h2>The Story</h2>
        <div class="bio_photo">
          <p>${data.bio}</p>
          <img src="${data.avatar_url}">
        </div>
      </div>
    </section>
  `
});
req.send();
