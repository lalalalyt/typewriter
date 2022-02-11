const sentence = "hello there from lighthouse labs";
for (let i = 0; i <= sentence.length; i++) {
  if (i < sentence.length) {
    setTimeout(() => process.stdout.write(sentence[i]), 50 * i);
  } else {
    setTimeout(() => process.stdout.write("\n"), 50 * i);
  }
}
