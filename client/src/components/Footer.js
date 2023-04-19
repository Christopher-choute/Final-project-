import React from 'react';
import SimpleReactFooter from 'simple-react-footer';


const Footer = () => {
  // Define the data for the footer
  const description = "Fish haven is a full stack website created by Christopher Choute using React and Flask SQlAlchemy. I want to thank Tyler and Eleanor for being the best instructors ever and I want to thank my peers for helping me in times of need since phase 1.";
  const title = "Fish Haven";

  const columns = [{
    title: "Column 1",
    resources: [{
      name: "Item 1",
      link: "/item1"
    },{
      name: "Item 2",
      link: "/item2"
    },{
      name: "Item 3",
      link: "/item3"
    },{
      name: "Item 4",
      link: "/item4"
    }]
  },{
    title: "Column 2",
    resources: [{
      name: "Item 5",
      link: "/item5"
    },{
      name: "Item 6",
      link: "/item6"
    }]
  },{
    title: "Column 3",
    resources: [{
      name: "Item 7",
      link: "/item7"
    },{
      name: "Item 8",
      link: "/item8"
    }]
  }];


  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="https://www.linkedin.com/in/chris-choute-521864262/"
    instagram="lorem_ipsum_live"
    iconColor="black"
    backgroundColor="#33cccc"
    class= "footer"
  />;
}

export default Footer;


