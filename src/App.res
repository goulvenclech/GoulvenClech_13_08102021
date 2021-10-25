%%raw("import 'tailwindcss/tailwind.css'")
%%raw("import '../designs/css/main.css'")

@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  switch url.path {
    | list{} => <Home />
    | list{"user"} => <User />
    | list{"sign-in"} => <SignIn />
    | _ => <NotFound />
  }
}