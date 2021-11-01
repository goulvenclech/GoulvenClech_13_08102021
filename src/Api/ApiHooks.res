type request
type response
@bs.new external makeXMLHttpRequest: unit => request = "XMLHttpRequest"
@bs.send external addEventListener: (request, string, unit => unit) => unit = "addEventListener"
@bs.get external response: request => response = "response"
@bs.send external open_: (request, string, string) => unit = "open"
@bs.send external send: request => unit = "send"
@bs.send external abort: request => unit = "abort"
@bs.scope("JSON") @bs.val
external parseResponse: response => {"message": array<string>} = "parse"


let useUserData = () => {
  let request = makeXMLHttpRequest()
  request->addEventListener("load", () => {
    let response = request->response->parseResponse
    Js.log(response["message"])
  })
  request->addEventListener("error", () => {
    Js.log("Error logging here")
  })
  request->open_("GET", "http://localhost:3001/api/v1/user/login")
  request->send

  ()
}


// bindings can be isolated/upstreamed. I'm inlining it just for the example

// =========

// shape of your response
