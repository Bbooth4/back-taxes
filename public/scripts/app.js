
function createPosts(post) {
  const title = post.title;
  const description = post.description;
  const url = post.url;
  const $posts = `
    <div class="card">
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title">${title}</span>
          <p>${description}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Check out the article here!</a>
        </div>
      </div>
    </div>
    `
  return $posts;
};

const renderPosts = (posts) => {
  console.log('renderPosts')
  $('.posts').empty();
  return posts.map(post => $('.posts').prepend(createPosts(post)) );
};

const loadPosts = () => {
  console.log('loadPosts')
  $.ajax({
    method: 'GET',
    url: '/posts'
  }).done((data) => {
    console.log('data', data);
    renderPosts(data);
  }).fail((err) => {
    console.error(err);
  });
};

const checkIfLoggedIn = () => {
  console.log('checkIfLoggedIn');
  $.ajax({
    method: 'POST',
    url: '/login'
  }).done((data) => {
    console.log('data', data);
  }).fail((err) => {
    console.error(err);
  });
};

$(() => {

  loadPosts();
  checkIfLoggedIn(); 

});
