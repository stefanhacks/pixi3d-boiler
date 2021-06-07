import * as PIXI from 'pixi.js';
import * as PIXI3D from 'pixi3d';

function onLoad(app, resources) {
  const mesh = app.stage.addChild(PIXI3D.Mesh3D.createCube());

  const model = app.stage.addChild(
    PIXI3D.Model.from(resources['waterbottle.gltf'].gltf),
  );
  model.scale.set(15);

  PIXI3D.LightingEnvironment.main.lights.push(
    Object.assign(new PIXI3D.Light(), { x: -1, z: 3 }),
  );

  let rotation = 0;
  app.ticker.add(() => mesh.rotationQuaternion.setEulerAngles(0, rotation++, 0));
}

export default function game(parent = window) {
  const app = new PIXI.Application({ backgroundColor: 0xdddddd, resizeTo: parent, antialias: true });

  app.loader.add('waterbottle.gltf', 'assets/models/waterbottle/waterbottle.gltf');
  app.loader.load((_l, resources) => onLoad(app, resources));

  return app;
}
