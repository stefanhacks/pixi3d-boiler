import game from "./app/game";

const resize = () => {
  document.body.style.height = window.innerHeight + "px";
};

function make() {
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.margin = 0;
  document.body.style.backgroundColor = "black";
  resize();
  window.addEventListener("resize", (e) => resize());

  const container = document.createElement("div");
  container.style.height = "640px";
  container.style.width = "800px";

  document.body.appendChild(container);

  const gameView = game(container).view;
  container.appendChild(gameView);
}

make();
