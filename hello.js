function hello(name) {
  let phrase = `hello, ${name}`;
  say(phrase);
  debugger;
}

say = (phrase) => alert(`${phrase}`);
