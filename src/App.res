%%raw("import 'tailwindcss/tailwind.css'")

@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  switch url.path {
    | list{} => <Home />
    | _ => <NotFound />
  }
}