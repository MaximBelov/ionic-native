import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaInstance, IonicNativePlugin,  } from '@ionic-native/core';

declare const window: any;

export interface FTMPayloadOptions {
  id: string,
  filePath: string,
  fileKey?: string,
  serverUrl: string,
  notificationTitle?: string,
  headers?: {
    [name: string]: string
  },
  parameters?: {
    [name: string]: string
  }
}

export interface FTMOptions {
  callBack: Function;
  config?: {
    parallelUploadsLimit?: number;
  }
}

export class FileTransferManager {
  private _objectInstance: any;

  constructor(options: FTMOptions ) {
    this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
  }

  @CordovaInstance({ sync: true })
  startUpload(payload: FTMPayloadOptions): Promise<any> {
    return;
  }

  @CordovaInstance()
  removeUpload(id: any): Promise<any> {
    return;
  }

  @CordovaInstance()
  acknowledgeEvent(id: string): Promise<any> {
    return;
  }

  @CordovaInstance()
  destroy(): Promise<any> {
    return;
  }

}

/**
 * @name BackgroundUpload
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BackgroundUpload } from '@ionic-native/background-upload/npx';
 *
 *
 * constructor(private backgroundUpload: BackgroundUpload) { }
 *
 * ...
 *
 *
 * this.backgroundUpload.init({})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BackgroundUpload',
  plugin: '@spoonconsulting/cordova-plugin-background-upload',
  pluginRef: 'FileTransferManager',
  repo: 'https://github.com/spoonconsulting/cordova-plugin-background-upload',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BackgroundUpload extends IonicNativePlugin {
  FileTransferManager = FileTransferManager;

  init(options: FTMOptions): FileTransferManager {
    return new FileTransferManager(options)
  }
}
