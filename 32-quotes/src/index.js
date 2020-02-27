// API STUFF
const API_ENDPOINT = "http://localhost:3000";

const QUOTES_URL = `${API_ENDPOINT}/quotes`;
const LIKES_URL = `${API_ENDPOINT}/likes`;
const QUOTES_WITH_LIKES_URLS = `${QUOTES_URL}?_embed=likes`;

const API = {
  getQuotes: () => fetch(QUOTES_WITH_LIKES_URLS).then(res => res.json()),
  deleteQuote: quoteId =>
    fetch(`${QUOTES_URL}/${quoteId}`, { method: "DELETE" }),
  postQuote: quote =>
    fetch(QUOTES_WITH_LIKES_URLS, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quote)
    })
      .then(res => res.json())
      .then(quote => {
        return {
          ...quote,
          likes: []
        };
      }),
  postLike: quoteId =>
    fetch(LIKES_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ quoteId, createdAt: Date.now() })
    }).then(res => res.json())
};

// DOM ELEMENTS
const quoteList = document.querySelector("#quote-list");
const newQuoteForm = document.querySelector("#new-quote-form");

const handleFormSubmit = event => {
  event.preventDefault();
  const quoteInput = event.target.querySelector("#new-quote");
  const authorInput = event.target.querySelector("#author");
  const newQuote = {
    quote: quoteInput.value,
    author: authorInput.value
  };
  API.postQuote(newQuote).then(renderQuote);
};

const niceDate = time => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};

newQuoteForm.addEventListener("submit", handleFormSubmit);

const likeQuote = (buttonLike, quote, dateLikedSpan) => {
  buttonLike.disabled = true;
  API.postLike(quote.id).then(like => {
    quote.likes.push(like);
    buttonLike.innerHTML = `Likes: <span>${quote.likes.length}</span>`;
    buttonLike.disabled = false;

    dateLikedSpan.innerText =
      quote.likes.length === 0
        ? "NEVER"
        : niceDate(quote.likes[quote.likes.length - 1].createdAt);
  });
};

const renderQuote = quote => {
  //     <li class='quote-card'>
  //     <blockquote class="blockquote">
  //       <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  //       <footer class="blockquote-footer">Someone famous</footer>
  //       <br>
  //       <button class='btn-success'>Likes: <span>0</span></button>
  //       <button class='btn-danger'>Delete</button>
  //     </blockquote>
  //   </li>
  const li = document.createElement("li");
  li.className = "quote-card";
  const blockquote = document.createElement("blockquote");
  blockquote.className = "blockquote";
  const p = document.createElement("p");
  p.className = "mb-0";
  p.innerText = quote.quote;
  const footer = document.createElement("footer");
  footer.className = "blockquote-footer";
  footer.innerText = quote.author;
  const br = document.createElement("br");
  const buttonLike = document.createElement("button");
  buttonLike.className = "btn-success";
  buttonLike.innerHTML = `Likes: <span>${quote.likes.length}</span>`;

  const dateLikedSpan = document.createElement("span");

  dateLikedSpan.innerText =
    quote.likes.length === 0
      ? "NEVER"
      : niceDate(quote.likes[quote.likes.length - 1].createdAt);

  buttonLike.addEventListener("click", () =>
    likeQuote(buttonLike, quote, dateLikedSpan)
  );

  const buttonDelete = document.createElement("button");
  buttonDelete.className = "btn-danger";
  buttonDelete.innerText = "Delete";

  buttonDelete.addEventListener("click", () => {
    API.deleteQuote(quote.id).then(() => {
      li.remove();
    });
  });

  blockquote.append(p, footer, br, buttonLike, dateLikedSpan, buttonDelete);

  li.append(blockquote);

  quoteList.append(li);
};

const renderQuotes = quotes => {
  quotes.forEach(quote => renderQuote(quote));
};

API.getQuotes().then(renderQuotes);
