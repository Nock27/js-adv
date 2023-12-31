function solve() {
  let inputTextAreaElement = document.getElementById('input');
  let sentences = Array.from(inputTextAreaElement.value.split(".")).filter(s => s!== '');
  let outputText = document.getElementById("output");
  while(sentences.length > 0){
    let tempText = sentences.splice(0,3).join('. ')
    let p = document.createElement('p');
    p.textContent = tempText += '.';
    outputText.appendChild(p);
  }
}








// JavaScript, often abbreviated as JS, is
// a high-level, interpreted programming
// language. It is a language which is also
// characterized as dynamic, weakly typed,
// prototype-based and multi-paradigm.JavaScript, often abbreviated as JS, is
// a high-level, interpreted programming
// language. It is a language which is also
// characterized as dynamic, weakly typed,
// prototype-based and multi-paradigm.
// Alongside HTML and CSS, JavaScript is
// one of the three core technologies of
// the World Wide Web. JavaScript enables
// interactive web pages and thus is an
// essential part of web applications. The
// vast majority of websites use it, and
// all major web browsers have a dedicated
// JavaScript engine to execute it. As a
// multi-paradigm language, JavaScript
// supports event-driven, functional, and
// imperative (including object-oriented
// and prototype-based) programming styles.
// It has an API for working with text,
// arrays, dates, regular expressions, and
// basic manipulation of the DOM, but the
// language itself does not include any
// I/O, such as networking, storage, or
// graphics facilities, relying for these
// upon the host environment in which it is
// embedded.

