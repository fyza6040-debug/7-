function joinGame() {
  let name = document.getElementById("playerName").value;
  let image = document.getElementById("playerImage").value;

  if(name === "") {
    document.getElementById("status").innerText = "اكتبي اسمك أولًا";
    return;
  }

  localStorage.setItem("player", JSON.stringify({
    name: name,
    image: image
  }));

  document.getElementById("status").innerText = "تم الدخول بنجاح 🎉";
}
