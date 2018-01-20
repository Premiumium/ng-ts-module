export function Dependable(classConfig: ClassConfig) {
  return <T extends { new(...args: any[]): {} }>(BaseClass: T) => {
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

interface ClassConfig {
  loader;
  imports?: string[];
}