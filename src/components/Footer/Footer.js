import SectionBox from '../SectionBox/SectionBox';
import { FOOTER_SECTION_DATA } from '../Variable';
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="communication">이솝 커뮤니케이션</div>
        <div className="sectionContainer">
          {FOOTER_SECTION_DATA.map(({ id, title, subject }) => {
            return <SectionBox key={id} title={title} subject={subject} />;
          })}
        </div>
      </div>
      <div className="corp">© 2SOP</div>
    </footer>
  );
};

export default Footer;
