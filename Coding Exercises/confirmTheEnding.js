function confirmEnding(str, target) {
  let targetLength = target.length;
  let doesStrEndWith = str.slice(str.length - targetLength);

  return doesStrEndWith === target;
}

confirmEnding("Bastian", "n");
