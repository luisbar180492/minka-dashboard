/********************
 * From third party *
 ********************/
import React from 'react';
/****************
 * From project *
 ****************/
import { HOME, ACCOUNT } from 'common/config';
import { Drawer } from 'component';

export default ({ pathname }) => (
  pathname === HOME ||
  pathname === ACCOUNT
  ? <Drawer
      pathname={pathname}/>
  : null
);
