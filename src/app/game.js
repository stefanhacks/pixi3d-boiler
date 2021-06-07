import * as PIXI from 'pixi.js';
import * as PIXI3D from 'pixi3d';

function makeCamera(app) {
  const control = new PIXI3D.CameraOrbitControl(app.view);
  control.allowControl = true;
  control.target.y = 2;
}

function makeLights() {
  const sun = Object.assign(
    new PIXI3D.Light(), {
      x: 5, y: 3, z: 3, intensity: 10,
    },
  );

  const reflection = Object.assign(
    new PIXI3D.Light(), {
      x: -5, y: 0.8, z: 0, intensity: 5,
    },
  );

  const backlight = Object.assign(
    new PIXI3D.Light(), {
      x: 0, y: 0.8, z: -5, intensity: 1,
    },
  );

  PIXI3D.LightingEnvironment.main.lights.push(sun, reflection, backlight);
}

function makeAction(app) {
  const onLoad = (_a, resources) => {
    const bottle = PIXI3D.Model.from(resources['waterbottle.gltf'].gltf);
    bottle.scale.set(15);
    bottle.position.y = 1.95;

    const plane = PIXI3D.Mesh3D.createPlane();
    plane.scale.set(3);

    app.stage.addChild(bottle, plane);
  };

  app.loader.add('waterbottle.gltf', 'assets/models/waterbottle/waterbottle.gltf');
  app.loader.load((_l, resources) => onLoad(app, resources));
}

export default function game(parent = window) {
  const app = new PIXI.Application({ backgroundColor: 0xdddddd, resizeTo: parent, antialias: true });
  makeLights();
  makeCamera(app);
  makeAction(app);

  return app;
}
