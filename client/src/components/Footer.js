import React from 'react';
import SimpleReactFooter from 'simple-react-footer';


const Footer = () => {
  // Define the data for the footer
  const description = "Fish haven is a full stack website created by Christopher Choute using React and Flask SQlAlchemy. I want to thank Tyler and Eleanor for being the best instructors ever and I want to thank my peers for helping me in times of need since phase 1.";
  const title = "Fish Haven";

  const columns = [{
    title: "Want to reach out?",
    resources: [{
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chris-choute-521864262/"
    },{
      name: "Instagram",
      link: "https://www.instagram.com/chris_choute/"
    },{
      name: "Twitter",
      link: "https://twitter.com/home"
    },{
      name: "Item 4",
      link: "/item4"
    }]
  },{
    title: "Here's more info!",
    resources: [{
      name: "Setting up your first Freshwater tank!",
      link: "https://www.youtube.com/watch?v=tSg-Zgps_d0"
    },{
      name: "Setting up your first Saltwater tank!",
      link: "https://www.youtube.com/watch?v=p9BkkaWXAiE"
    }]
  },{
    title: "Fish for beginners!",
    resources: [{
      name: "Freshwater",
      link: "https://fishkeepingadvice.com/13-best-freshwater-fish/"
    },{
      name: "Saltwater",
      link: "https://oceanfloorstore.com/best-saltwater-aquarium-fish-for-beginners/"
    }]
  }];


  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="https://www.linkedin.com/in/chris-choute-521864262/"
    instagram="https://www.instagram.com/chris_choute/"
    iconColor="black"
    backgroundColor="#33cccc"
  />;
}

export default Footer;


