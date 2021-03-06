/**
 *
 * SubPage
 *
 */

import React from 'react';

import Button from '../Button';

const SubPage = props => {
  const { title, isMenuOpen, toggleMenu, children } = props;

  return (
    <div className='sub-page'>
      <div className='subpage-header'>
        <h1>{title}</h1>
        {isMenuOpen !== null && (
          <div className='action'>
            {isMenuOpen ? (
              <Button
                className='btn-no-styles'
                ariaLabel='add form view'
                ariaExpanded='true'
                icon={<i className='fa fa-ellipsis-h' aria-hidden='true' />}
                onClick={toggleMenu}
              />
            ) : (
              <Button
                className='btn-no-styles'
                ariaLabel='default view'
                ariaExpanded='false'
                icon={<i className='fa fa-ellipsis-v' aria-hidden='true' />}
                onClick={toggleMenu}
              />
            )}
          </div>
        )}
      </div>
      <div className='subpage-body'>{children}</div>
    </div>
  );
};

export default SubPage;
