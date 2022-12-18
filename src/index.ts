type DependenciesFactories = Record<string, Function>

export const depContainer: Record<string, any> = {

}

export const createController = (dependenciesFactories: DependenciesFactories) => {
  Object.entries(dependenciesFactories).forEach(([dependencyName, factory]) => {
    return Object.defineProperty(
      depContainer, 
      dependencyName, {
      get: () => factory(depContainer),
    })
  })
}