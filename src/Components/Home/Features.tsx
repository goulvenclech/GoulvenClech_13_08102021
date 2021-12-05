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
    <section className="flex flex-col md:flex-row text-center">
      <h2 className="sr-only">
        Features
      </h2>
      {
        featureItems.map((featureItem, index) => {
          return <div className="flex-1 p-10" key={index}>
            <img src={`./img/${featureItem.icon}`} alt="Chat Icon" 
              className="p-4 w-24 mx-auto border-8 border-solid border-green-500 rounded-full" />
            <h3 className=" text-xl font-bold my-2">
              {featureItem.title}
            </h3>
            <p>
              {featureItem.text}
            </p>
          </div>
        })
      }

    </section>
  )
}
