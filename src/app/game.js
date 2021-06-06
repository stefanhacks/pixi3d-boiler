import * as PIXI from "pixi.js";
import * as PIXI3D from "pixi3d";

export default function (parent = window) {
  let app = new PIXI.Application({
    backgroundColor: 0xdddddd,
    resizeTo: parent,
    antialias: true,
  });

  let mesh = app.stage.addChild(PIXI3D.Mesh3D.createCube());

  PIXI3D.LightingEnvironment.main.lights.push(
    Object.assign(new PIXI3D.Light(), { x: -1, z: 3 })
  );

  let rotation = 0;
  app.ticker.add(() => {
    mesh.rotationQuaternion.setEulerAngles(0, rotation++, 0);
  });

  return app;
}
