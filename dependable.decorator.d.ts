export declare function Dependable(classConfig: ClassConfig): <T extends {
    new (...args: any[]): any;
}>(BaseClass: T) => any;
export interface ClassConfig {
    loader: any;
    imports?: string[];
}
