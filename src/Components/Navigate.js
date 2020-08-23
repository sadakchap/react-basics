import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Navigate = () => {

    const [showMenu, setShowMenu] = useState(false);

    const transitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0},
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: "translateX(-100%)" },
      enter: { opacity: 1, transform: "translateX(0)" },
      leave: { opacity: 0, transform: "translateX(-100%)" },
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
      <nav>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />

        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="bg-black-t-50 fixed top-0 left-0 shadow w-full h-full z-50"
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}

        {menuTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="fixed top-0 left-0 shadow bg-white w-4/5 h-full z-50"
                onClick={toggleMenu}
              >
                <div className="px-2 py-3 font-bold">AppName</div>
                <ul >
                  <li>
                    <Link to="/" className="text-blue-500 block border-t border-b bg-gray-100 mb-1 px-3"> Home </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-blue-500 block border-t border-b bg-gray-100 mb-1 px-3"> About </Link>
                  </li>
                </ul>
              </animated.div>
            )
        )}
      </nav>
    );
}

export default Navigate
