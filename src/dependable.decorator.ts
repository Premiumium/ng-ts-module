export function Dependable(classConfig: ClassConfig): <T extends { new(...args: any[]): any }>(BaseClass: T) => any  {
  return <T extends { new(...args: any[]): any }>(BaseClass: T) => {
    return class extends BaseClass {
      static load(): any {
        return makeNgConfig();
      }
    }
    
    function makeNgConfig(): any[] {
      if (!classConfig.imports) {
        return classConfig.loader;
      }

      let ngConfig: any[] = [];
      ngConfig = classConfig.imports;
      ngConfig.push(classConfig.loader);
      return ngConfig;
    }
  }
}

export interface ClassConfig {
  loader;
  imports?: string[];
}