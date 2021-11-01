import React from "react"

interface Feature {
  icon: string,
  title: string,
  text: string
}

export default function Features() {

  const featureItems: Array<Feature> = [
    {
      icon: "icon-chat.png", 
      title: "You are our #1 priority", 
      text: `Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.`
    },
    {
      icon: "icon-money.png", 
      title: "More savings means higher rates", 
      text: "The more you save with us, the higher your interest rate will be!"
    },
    {
      icon: "icon-security.png", 
      title: "You are our #1 priority", 
      text: `We use top of the line encryption to make sure your data and money
        is always safe.`
    },
  ]

  return (
    <section className="features">
      <h2 className="sr-only">
        Features
      </h2>
      {
        featureItems.map((featureItem, index) => {
          return <div className="feature-item" key={index}>
            <img src={`./img/${featureItem.icon}`} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">
              {featureItem.title}
            </h3>
            <p>
              {featureItem.title}
            </p>
          </div>
        })
      }

    </section>
  )
}
