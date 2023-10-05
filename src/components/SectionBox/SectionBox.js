import Subject from '../Subject/Subject';
import React from 'react';
import './SectionBox.scss';

const SectionBox = ({ title, subject }) => {
  return (
    <section>
      <div className="title">{title}</div>
      <div>
        {subject.map((value, index) => {
          return <Subject subject={value} key={index} />;
        })}
      </div>
    </section>
  );
};

export default SectionBox;
