type featureItem = {icon: string, title: string, text: string}

@react.component
let make = () => {

    let featureItems = [
      {
        icon: "icon-chat.png", 
        title: "You are our #1 priority", 
        text: "Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
      },
      {
        icon: "icon-money.png", 
        title: "More savings means higher rates", 
        text: "The more you save with us, the higher your interest rate will be!"
      },
      {
        icon: "icon-security.png", 
        title: "You are our #1 priority", 
        text: "We use top of the line encryption to make sure your data and money
          is always safe."
      },
    ]

    <section className="features">
      <h2 className="sr-only">
        {React.string("Features")}
      </h2>
      {
        React.array(Belt.Array.mapWithIndex(featureItems, (index, featureItem) => {
          <div className="feature-item" key={Belt.Int.toString(index)}>
            <img src=`./img/${featureItem.icon}` alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">
              {React.string(featureItem.title)}
            </h3>
            <p>
              {React.string(featureItem.title)}
            </p>
          </div>
        }))
      }

    </section>
}
