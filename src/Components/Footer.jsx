import React from "react";

const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    // console.log("query", FooterLinks);
     console.log("query", allFooterLinks);

    switch (element) {
        case 0:
                allFooterLinks.forEach((item,index)=> index === 0 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));  
            break;
        case 1:
                allFooterLinks.forEach((item,index)=> index === 1 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));   
            break;
        case 2:
                allFooterLinks.forEach((item,index)=> index === 2 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));  
            break;
        case 3:
                allFooterLinks.forEach((item,index)=> index === 3 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));   
            break;
        case 4:
                allFooterLinks.forEach((item,index)=> index === 4 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));  
            break;
        case 5:
                allFooterLinks.forEach((item,index)=> index === 5 ? (item.style.opacity= 1) : (item.style.opacity=0.2 ));   
            break;

        default:
            allFooterLinks.forEach((item)=> (item.style.opacity=1));
            break; 
        };
};

    const backToNormal =() => {
        const allFooterLinks = document.querySelectorAll(".footerLinks");

        allFooterLinks.forEach((item)=>(item.style.opacity=1));

    
};
const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnChai ?
        </h1>

        <aside onMouseLeave={backToNormal}>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0)}>
            Home
          </a>
          <a href="/story" className="footerLinks" onMouseOver={()=>footerLinks(1)}>
            Story
          </a>
          <a href="/media" className="footerLinks" onMouseOver={()=>footerLinks(2)}>
            Media
          </a>
          <a href="/franchise" className="footerLinks" onMouseOver={()=>footerLinks(3)}>
            Franchise
          </a>
          <a href="/events" className="footerLinks" onMouseOver={()=>footerLinks(4)}>
            Events
          </a>
          <a href="/chaiwalacares" className="footerLinks" onMouseOver={()=>footerLinks(5)}>
            Chai Wala Cares
          </a>
        </aside>
        <div>
          <h5> Email</h5>
          <a href="mailto:abdulmananmustafa@gmail.com">
          
            abdulmananmustafa@gmail.com
          </a>
        </div>
        <div>
          <h5>Phone </h5>
          <a href="tel: +923089241007 "> 03089241007 </a>
        </div>
        <p> © COPYRIGHT BY Abdul Manan Baloch</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
