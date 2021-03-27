import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({ sections }) =>(
  <div className='directory-menu'>
    {
      sections.map(
        ({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        )
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);