import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import { portfolioData, filteroptions } from './utils';


function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li className={option.id === filterValue && 'active'} onClick={() => setFiltervalue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;