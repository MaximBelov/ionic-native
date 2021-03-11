import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name LocalBackup
 * @description
 * This plugin to create local backup
 *
 * @usage
 * ```typescript
 * import { LocalBackup } from '@ionic-native/local-backup';
 *
 *
 * constructor(private localBackup: LocalBackup) { }
 *
 * ...
 *
 *
 * this.localBackup.create({data: {key: '1'}})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'LocalBackup',
  plugin: 'cordova-plugin-local-backup',
  pluginRef: 'LocalBackup',
  platforms: ['Android']
})
@Injectable()
export class LocalBackup extends IonicNativePlugin {
  @Cordova()
  create(data: any): Promise<boolean> {
    return;
  }

  @Cordova()
  read(): Promise<any>{
    return;
  }

  @Cordova()
  remove(): Promise<boolean>{
    return;
  }

}
