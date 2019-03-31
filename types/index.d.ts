declare module "webgl-debug" {
    type GLDebugOnErrorCallback = (err?: Error, funcName?: string, args?: any[]) => void;
    type GLDebugOnFuncCallback = (funcName?: string, args?: any[]) => void;

    export function makeDebugContext(
        gl: WebGLRenderingContext,
        onError?: GLDebugOnErrorCallback,
        onFunc?: GLDebugOnFuncCallback
    ): WebGLRenderingContext;
    export function makeDebugContext(
        gl: WebGL2RenderingContext,
        onError?: GLDebugOnErrorCallback,
        onFunc?: GLDebugOnFuncCallback
    ): WebGL2RenderingContext;
}
