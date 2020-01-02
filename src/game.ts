import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
import {
  AbstractMesh,
  Engine,
  Scene,
  ArcRotateCamera,
  Light,
  Axis,
  Tools,
  Space,
  Vector3,
  HemisphericLight,
  ExecuteCodeAction,
  ActionManager
} from 'babylonjs';
import { Observable, forkJoin } from 'rxjs';
import { MeshHelper } from './helpers/mesh.helper';
import { tap, map } from 'rxjs/operators';

export class Game {
  private engine: Engine;
  private scene: Scene;
  private camera: ArcRotateCamera;
  private light: Light;
  private skyBox: AbstractMesh;
  private world: AbstractMesh;
  private keyMap: object;

  constructor(public canvas: HTMLCanvasElement) {}

  public start(): void {
    this.createScene().subscribe(() => {
      this.registerListeners();
      this.loop();
    });
  }

  /**
   * Lights, Camera, Action
   */
  private createScene(): Observable<void> {
    this.engine = new Engine(this.canvas, true);
    window.addEventListener('resize', () => this.engine.resize());
    this.scene = new Scene(this.engine);
    this.scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    // Enable scene collisions
    this.scene.collisionsEnabled = true;
    this.createLights();
    this.createCamera();
    return this.createActors();
  }

  private registerListeners(): void {
    this.keyMap = {};

    window.addEventListener(
      'keydown',
      evt => (this.keyMap[evt.key] = evt.type == 'keydown'),
      false
    );
    window.addEventListener(
      'keyup',
      evt => (this.keyMap[evt.key] = evt.type == 'keydown'),
      false
    );
    this.scene.registerAfterRender(() => {
      if (this.keyMap['w'] || this.keyMap['W']) {
        this.world.rotate(Axis.X, Tools.ToRadians(0.3), Space.WORLD);
      }
      if (this.keyMap['s'] || this.keyMap['S']) {
        this.world.rotate(Axis.X, Tools.ToRadians(-0.3), Space.WORLD);
      }
      if (this.keyMap['a'] || this.keyMap['A']) {
        this.world.rotate(Axis.Y, Tools.ToRadians(0.5), Space.WORLD);
      }
      if (this.keyMap['d'] || this.keyMap['D']) {
        this.world.rotate(Axis.Y, Tools.ToRadians(-0.5), Space.WORLD);
      }
    });
  }

  private createCamera(): void {
    // Parameters: alpha, beta, radius, target position, scene
    this.camera = new BABYLON.ArcRotateCamera(
      'Camera',
      Math.PI / 2,
      0.85,
      0,
      new Vector3(0, 0, -8),
      this.scene
    );
    this.camera.radius = 9.5;
    // Prevent camera from colliding with objects
    this.camera.checkCollisions = true;
    // Attach the camera to the canvas
    this.camera.attachControl(this.canvas, true);
  }

  private createLights(): void {
    this.light = new HemisphericLight(
      'HemiLight',
      new Vector3(0, 1, 0),
      this.scene
    );
  }

  /**
   * Creates all actors and adds theme to the scene
   */
  private createActors(): Observable<void> {
    return forkJoin({
      skyBox: MeshHelper.getSkyBox(this.scene),
      world: MeshHelper.getWorld(this.scene)
    }).pipe(
      map(actors => {
        this.skyBox = actors.skyBox;
        this.world = actors.world;
      })
    );
  }

  private loop(): void {
    this.engine.runRenderLoop(() => {
      this.skyBox.rotate(new Vector3(0, 1, 0), 0.0005);
      this.world.rotate(Axis.X, Tools.ToRadians(0.01), Space.WORLD);
      this.scene.render();
    });
  }
}
