import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DealsBox from "./dealsbox";
import styles from './style.scss';

export default function Deals({ children }) {
  const [state, setState] = useState([
    { 
      id: 1, 
      tagname: "10% OFF", 
      dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
      dealinst: "Valid on Fridays from 1pm-3pm"
    },
    {
      id: 2,
      tagname: "Bogo",
      dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
      dealinst: "Valid on Fridays from 2pm-4pm"
    },
    {
      id: 3,
      tagname: "Happy hour",
      dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
      dealinst: "Valid on Fridays from 2pm-5pm"
    },
    {
      id: 4,
      tagname: "$5 OFF",
      dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
      dealinst: "Valid on Fridays from 2pm-36pm",
      visible: "disabled"
    },
  ]);
  const ListItem = (item) => (
    <DealsBox
      key={item.id}
      id={item.id}
      tagLabel={item.tagname} 
      title={item.dealtitle}
      disabled={item.visible}
      inst={item.dealinst}
    />
  );
	return (
		<>
      <div className={`${styles['heading-section']}`}>
        <h2>Deals of the Day</h2>
        <Link to="/" className={`${styles.link} h5`}>
          See All 20
        </Link>
      </div>
      <div className={`${styles.row}`}>
        {state.map(d => (
          <div key={d.id}>
            {ListItem(d)}
          </div>
        ))}
      </div>
		</>
	);
}

