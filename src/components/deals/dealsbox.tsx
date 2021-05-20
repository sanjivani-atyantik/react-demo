import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import dealstyles from './dealsbox.scss';

export default function DealsBox(props) {
  const {
    className,
    disabled,
    id,
    tagLabel,
    title,
    inst,
  } = props;
  let extraClasses = getExtraClasses(dealstyles, className);
	return (
		<>
      <div className={`${dealstyles.dealsbox} ${extraClasses}`}>
        <input type="checkbox" id={id} className={`${dealstyles['custom-box']}`} disabled={disabled} />
        <label htmlFor={id} className={`${dealstyles['checkbox-label']}`}>
            <span className={`${dealstyles['deals-title']}`}>{title}</span>
            <span>{inst}</span>
            <span className={`${dealstyles['align-right']}`}>
              <span className={`${dealstyles.dealtag}`}>
              {tagLabel}
              </span>
            </span>
        </label>
      </div>
		</>
	);
}

