const path = require("path");
const commonConfigGenerator = require("@dev/build-tools").webpackTools.commonUMDWebpackConfiguration;

module.exports = (env) => {
    const commonConfig = commonConfigGenerator({
        mode: env.production ? "production" : "development",
        devPackageName: "node-geometry-editor",
        devPackageAliasPath: `../../../tools/nodeGeometryEditor/dist`,
        namespace: "NODEGEOMETRYEDITOR",
        es6Mode: true,
        maxMode: true,
        minToMax: true,
        alias: {
            "shared-ui-components": path.resolve("../../../dev/sharedUiComponents/dist"),
        },
    });
    return commonConfig;
};
