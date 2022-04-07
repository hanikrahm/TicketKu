/// <reference types="node" />
import type * as http from 'http';
import type { Connect } from 'types/connect';
import type { HttpProxy } from 'types/http-proxy';
import type { ResolvedConfig } from '../..';
export interface ProxyOptions extends HttpProxy.ServerOptions {
    /**
     * rewrite path
     */
    rewrite?: (path: string) => string;
    /**
     * configure the proxy server (e.g. listen to events)
     */
    configure?: (proxy: HttpProxy.Server, options: ProxyOptions) => void;
    /**
     * webpack-dev-server style bypass function
     */
    bypass?: (req: http.IncomingMessage, res: http.ServerResponse, options: ProxyOptions) => void | null | undefined | false | string;
}
export declare function proxyMiddleware(httpServer: http.Server | null, config: ResolvedConfig): Connect.NextHandleFunction;
