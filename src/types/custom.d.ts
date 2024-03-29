declare module "*.png" {
  const content: string
  export default content
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.pdf" {
  const content: string
  export default content
}
