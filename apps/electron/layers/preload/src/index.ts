/**
 * @module preload
 */

import { contextBridge } from "electron";
import * as util from "util";
import * as fs from "fs";
import * as path from "path";
import * as child_process from "child_process";

const exec = util.promisify(child_process.exec);

function getAppDataPath(env: NodeJS.ProcessEnv) {
  switch (process.platform) {
    case "darwin": {
      return path.join(
        env.HOME as string,
        "Library",
        "Application Support",
        "mendix-electron"
      );
    }
    case "win32": {
      return path.join(env.APPDATA as string, "mendix-electron");
    }
    case "linux": {
      return path.join(env.HOME as string, ".mendix-electron");
    }
    default: {
      console.log("Unsupported platform!");
      process.exit(1);
    }
  }
}

// Expose version number to renderer
contextBridge.exposeInMainWorld("fs", fs);
contextBridge.exposeInMainWorld("exec", exec);
contextBridge.exposeInMainWorld("path", path);
contextBridge.exposeInMainWorld("cwd", process.cwd());
contextBridge.exposeInMainWorld("__dirname", __dirname);
contextBridge.exposeInMainWorld("mendixElectron", { version: 1 });
contextBridge.exposeInMainWorld("getAppDataPath", getAppDataPath(process.env));

/**
 * The "Main World" is the JavaScript context that your main renderer code runs in.
 * By default, the page you load in your renderer executes code in this world.
 *
 * @see https://www.electronjs.org/docs/api/context-bridge
 */

/**
 * After analyzing the `exposeInMainWorld` calls,
 * `packages/preload/exposedInMainWorld.d.ts` file will be generated.
 * It contains all interfaces.
 * `packages/preload/exposedInMainWorld.d.ts` file is required for TS is `renderer`
 *
 * @see https://github.com/cawa-93/dts-for-context-bridge
 */
