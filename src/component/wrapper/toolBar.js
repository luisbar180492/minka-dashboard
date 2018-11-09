/********************
 * From third party *
 ********************/
import React from 'react';
/****************
 * From project *
 ****************/
import { ToolBar } from 'component';
import { HOME, ACCOUNT } from 'common/config';
import { TXT_9, TXT_10 } from 'common/string';

export default ({ pathname }) => (
  pathname === HOME ||
  pathname === ACCOUNT
  ? <ToolBar
      title={
        pathname === HOME
        ? TXT_9
        : pathname === ACCOUNT
        ? TXT_10
        : ''
      }/>
  : null
);
