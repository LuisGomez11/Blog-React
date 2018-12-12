import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './Nav.css';

import imagen from '../../Assets/RM.png';

class Nav extends Component {

    static propTypes = {

        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired

    };

  render() {

    const { title, items } = this.props;

    return (
      <div className="Nav">
        
        <img src={imagen} alt="LOGO" align="left"></img>

            <h2>{ title }</h2>
        
            <ul className="Menu">
                {
                  items && items.map(
                    (item, key ) =><li key={key}><Link to={item.url}>{item.title}</Link></li>
                  )
                }
            </ul>

        
      </div>
    );
  }
}

export default Nav;