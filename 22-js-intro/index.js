document


typeof document // "object"
document.addEventListener // ƒ addEventListener() { [native code] }
document.querySelector // ƒ querySelector() { [native code] }
document.querySelector('body') //<body>​…​</body>​
document.querySelector('h1') // <h1>​JS​</h1>​
​
document.querySelector('h1') = false
// VM2338:1 Uncaught ReferenceError: Invalid left-hand side in assignment
//    at <anonymous>:1:10
// (anonymous) @ VM2338:1

document.querySelector('h1').innerText = 'hello' // "hello"
document.querySelector('p').innerHTML
// "
//       JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is an
//       interpreted programming language that conforms to the ECMAScript
//       specification.[7] JavaScript is high-level, often just-in-time compiled,
//       and multi-paradigm. It has curly-bracket syntax, dynamic typing,
//       prototype-based object-orientation, and first-class functions.
//     "
document.querySelector('p').innerHTML = "<strong>hello again in bold</strong>"

document.querySelector('p').innerText = "<strong>hello again in bold</strong>" // "<strong>hello again in bold</strong>"

const myNewEl = document.createElement('div')
// <div>​</div>​
myNewEl.innerText = 'js is cool' // <div>​js is cool​</div>​

document.append(myNewEl)
// VM3549:1 Uncaught DOMException: Failed to execute 'append' on 'Document': Only one element on document allowed.
//     at <anonymous>:1:10
// (anonymous) @ VM3549:1

document.querySelector('ul') // <ul>​…​</ul>​
document.querySelector('ul').append(myNewEl)

document.querySelector('img')
{/* <img style=​"width:​ 200px" src=​"https:​/​/​images.unsplash.com/​photo-1581858912190-152dce3eb486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80">​ */}
document.querySelectorAll('img')
// NodeList(3) [img, img#second-img, img]
document.querySelectorAll('img')[2].remove()
// undefined
document.querySelectorAll('img')[1]
{/* <img id=​"second-img" style=​"width:​ 200px" src=​"https:​/​/​images.unsplash.com/​photo-1581921032815-52b4869a159a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80">​ */}
document.querySelector('#second-img')
{/* <img id=​"second-img" style=​"width:​ 200px" src=​"https:​/​/​images.unsplash.com/​photo-1581921032815-52b4869a159a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80">​ */}
document.querySelector('#second-img').remove()

document.querySelector('img').src
// "https://images.unsplash.com/photo-1581858912190-152dce3eb486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
document.querySelector('img').src = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/NPellow.jpg'

document.querySelector('img').src = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/NPellow.jpg'

// document.querySelector('.negative')
{/* <p class=​"negative">​…​</p>​ */}
// document.querySelectorAll('.negative')