/* eslint-disable @typescript-eslint/naming-convention */
import { mapperManager } from "./configuration/mappers";
import { viewerGlobals } from "./configuration/globals";
import { viewerManager } from "./viewer/viewerManager";
import { DefaultViewer } from "./viewer/defaultViewer";
import { AbstractViewer } from "./viewer/viewer";
import { telemetryManager } from "./managers/telemetryManager";
import { ModelLoader } from "./loader/modelLoader";
import { ViewerModel, ModelState } from "./model/viewerModel";
import { AnimationPlayMode, AnimationState } from "./model/modelAnimation";
import { ILoaderPlugin } from "./loader/plugins/loaderPlugin";
import { AbstractViewerNavbarButton } from "./templating/viewerTemplatePlugin";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { registerCustomOptimizer } from "./optimizer/custom/index";
import { Logger } from "core/Misc/logger";

/**
 * BabylonJS Viewer
 *
 * An HTML-Based viewer for 3D models, based on BabylonJS and its extensions.
 */

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import * as BABYLON from "core/index";

// load needed modules.
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import "loaders/index";
import "pepjs";

import { initListeners, InitTags } from "./initializer";

initListeners();

//deprecated, here for backwards compatibility
const disableInit: boolean = viewerGlobals.disableInit;

/**
 * Dispose all viewers currently registered
 */
function disposeAll() {
    viewerManager.dispose();
    mapperManager.dispose();
    telemetryManager.dispose();
}

const Version = viewerGlobals.version;

Logger.Log("Babylon.js viewer (v" + Version + ")");

// public API for initialization
export {
    BABYLON,
    Version,
    InitTags,
    DefaultViewer,
    AbstractViewer,
    viewerGlobals,
    telemetryManager,
    disableInit,
    viewerManager,
    mapperManager,
    disposeAll,
    ModelLoader,
    ViewerModel,
    AnimationPlayMode,
    AnimationState,
    ModelState,
    ILoaderPlugin,
    AbstractViewerNavbarButton,
    registerCustomOptimizer,
};
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
export { GLTF2 } from "loaders/glTF/index";
// export publicliy all configuration interfaces
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
export * from "./configuration/index";
