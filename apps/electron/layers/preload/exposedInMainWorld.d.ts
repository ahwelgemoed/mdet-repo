interface Window {
    readonly fs: typeof import("fs");
    readonly exec: { (command: string): import("child_process").PromiseWithChild<{ stdout: string; stderr: string; }>; (command: string, options: { encoding: 'buffer'; } & import("child_process").ExecOptions): import("child_process").PromiseWithChild<{ stdout: Buffer; stderr: Buffer; }>; (command: string, options: { encoding: BufferEncoding; } & import("child_process").ExecOptions): import("child_process").PromiseWithChild<{ stdout: string; stderr: string; }>; (command: string, options: import("child_process").ExecOptions): import("child_process").PromiseWithChild<{ stdout: string; stderr: string; }>; (command: string, options?: { encoding?: string; } & import("child_process").ExecOptions): import("child_process").PromiseWithChild<{ stdout: string | Buffer; stderr: string | Buffer; }>; };
    readonly path: typeof import("path");
    readonly cwd: string;
    readonly __dirname: string;
    readonly mendixElectron: { version: number; };
    readonly getAppDataPath: string;
}
