import React, { useState, useEffect } from 'react'
import '../../App.css'

const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if(startIndex === endIndex) return startIndex;
  else if(startIndex === endIndex - 1) {
    if (
      Math.abs(sectionPositionArray[startIndex].headerRef.current.offsetTop - currentPosition)
      <
      Math.abs(sectionPositionArray[endIndex].headerRef.current.offsetTop - currentPosition)
    )
    return startIndex;
    else return endIndex;  
  } 
   else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop - currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
}


const Navbar = ({navHeader}) => {
  const [, setActiveClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY - 260,
        navHeader,
        0,
        navHeader.length - 1 
      )
      switch(index){
        case 2:
          setActiveClass('apropos');
          break;
        case 3:
          setActiveClass('produits');
          break;
        case 4:
          setActiveClass('quisommesnous');
          break;
        case 5:
          setActiveClass('partenaires');
          break;
        case 6:
          setActiveClass('contact');
          break;
        default:
          setActiveClass('accueil');
      }
      setActiveIndex(index)
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [navHeader])

  return (
    <div className='topbar-menu'>
      <nav>                    
          <div className="links">  
            {navHeader.map((header, index) => (
              <a
                  key={index + header.headerId}
                  onClick={() => {
                    setActiveClass(`${header.headerId}`);
                  }}
                  className={
                    activeIndex === index
                    ? "active_link_menu topbar_link"
                    : "topbar_link"
                  }
                  href={`#${header.headerId}`}
                >
                  {header.headerTitle}
              </a>
            ))}          
            {/* <a
              onClick={() => {
                setActiveClass("accueil");
              }}
              className={
                activeClass === "accueil"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#accueil"
            >
              Accueil
            </a>
            <a
              onClick={() => {
                setActiveClass("apropos");
              }}
              className={
                activeClass === "apropos"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#Apropos"
            >
              A propos
            </a>
            <a
              onClick={() => {
                setActiveClass("produits");
              }}
              className={
                activeClass === "produits"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#produits"
            >
              Produits
            </a>
            
            <a
              onClick={() => {
                setActiveClass("quisommesnous");
              }}
              className={
                activeClass === "quisommesnous"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#quisommesnous"
            >
              Qui Sommes Nous
            </a>
            <a
              onClick={() => {
                setActiveClass("partenaires");
              }}
              className={
                activeClass === "partenaires"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#partenaires"
            >
              Partenaires
            </a>
            <a
              onClick={() => {
                setActiveClass("contact");
              }}
              className={
                activeClass === "contact"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#contact"
            >
              Contact
            </a> */}
          </div>
        </nav>
    </div>
  )
}

export default Navbar