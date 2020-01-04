import { Observable, of } from 'rxjs';
import {
  Scene,
  AbstractMesh,
  StandardMaterial,
  Mesh,
  CubeTexture,
  SceneLoader
} from 'babylonjs';

export class MeshHelper {
  public static getSkyBox(scene: Scene): Observable<AbstractMesh> {
    const cubeFiles = [
      'assets/textures/skybox/space_left.jpg',
      'assets/textures/skybox/space_up.jpg',
      'assets/textures/skybox/space_front.jpg',
      'assets/textures/skybox/space_right.jpg',
      'assets/textures/skybox/space_down.jpg',
      'assets/textures/skybox/space_back.jpg'
    ];
    const skyBoxMaterial = new StandardMaterial('skybox', scene);
    skyBoxMaterial.disableLighting = true;
    skyBoxMaterial.backFaceCulling = false;
    skyBoxMaterial.reflectionTexture = CubeTexture.CreateFromImages(
      cubeFiles,
      scene
    );
    skyBoxMaterial.reflectionTexture.coordinatesMode =
      BABYLON.Texture.SKYBOX_MODE;
    const skyBox = Mesh.CreateBox('skybox', 100.0, scene);
    skyBox.checkCollisions = true;
    skyBox.infiniteDistance = true;
    skyBox.material = skyBoxMaterial;
    return of(skyBox);
  }

  public static getWorld(scene: Scene): Observable<AbstractMesh> {
    const repo = 'https://raw.githubusercontent.com/ricardomfmsousa';
    const path = '/blender/master/low-poly/mountains-world/';
    const file = 'mountains-world.glb';
    return Observable.create(observer => {
      SceneLoader.ImportMesh('', repo + path, file, scene, meshes => {
        const world = meshes[0];
        world.checkCollisions = true;
        observer.next(world);
        observer.complete();
      });
    });
  }
}
