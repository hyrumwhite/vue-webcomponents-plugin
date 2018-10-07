export default function(webComponentDefintion) {
  let startScriptTag = "<script>";
  let endScriptTag = "</script>";
  let startIndex =
    webComponentDefintion.indexOf(startScriptTag) + startScriptTag.length;
  let endIndex = webComponentDefintion.indexOf(endScriptTag);
  let script = webComponentDefintion.slice(startIndex, endIndex);
  let template = webComponentDefintion.slice(
    0,
    startIndex - startScriptTag.length
  );
  let div = document.createElement("div");
  div.innerHTML = webComponentDefintion;
  document.body.appendChild(div);
  let scriptEl = document.createElement("script");
  scriptEl.textContent = script;
  document.body.appendChild(scriptEl);
}
