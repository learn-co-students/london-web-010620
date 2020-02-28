document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");

  let imageId = 4708;

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

  const likeURL = `https://randopic.herokuapp.com/likes/`;

  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  const imageEl = document.querySelector("#image");
  const likesEl = document.querySelector("#likes");
  const nameEl = document.querySelector("#name");
  const commentsEl = document.querySelector("#comments");
  const likeButton = document.querySelector("#like_button");
  const commentForm = document.querySelector("#comment_form");

  const API = {
    getPic: () => fetch(imageURL).then(res => res.json()),
    likePic: pic =>
      fetch(likeURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ image_id: pic.id })
      }).then(res => res.json()),
    postComment: newComment =>
      fetch(commentsURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
      }).then(res => res.json()),
    deleteComment: comment =>
      fetch(`${commentsURL}${comment.id}`, { method: "DELETE" })
  };

  const renderComment = comment => {
    const commentEl = document.createElement("li");
    commentEl.innerText = comment.content;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", () => {
      API.deleteComment(comment).then(() => {
        commentEl.remove();
      });
    });
    commentEl.append(deleteButton);
    return commentEl;
  };

  const renderPic = picture => {
    imageEl.src = picture.url;
    likesEl.innerText = picture.like_count;
    nameEl.innerText = picture.name;
    picture.comments.forEach(commentObject => {
      commentsEl.append(renderComment(commentObject));
    });
    likeButton.addEventListener("click", () => {
      API.likePic(picture).then(() => {
        picture.like_count++;
        likesEl.innerText = picture.like_count;
      });
    });

    commentForm.addEventListener("submit", event => {
      event.preventDefault();
      const newComment = {
        image_id: picture.id,
        content: event.target.elements.comment.value
      };

      API.postComment(newComment).then(commentObject => {
        commentsEl.append(renderComment(commentObject));
      });
    });
  };

  API.getPic().then(image => renderPic(image));
});
