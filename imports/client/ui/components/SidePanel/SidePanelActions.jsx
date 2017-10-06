import React, { PropTypes } from 'react'

import {Toolbar} from 'material-ui/Toolbar';

import {CardActions} from 'material-ui/Card'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'

import ActionHome from 'material-ui/svg-icons/action/home';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import InfoIcon from 'material-ui/svg-icons/action/info';

const SidePanelActions = ({
  setPanelName
}) => (

  <Toolbar
    style={{
      position:'absolute',
      width : '100%',
      bottom : 0
    }}
    >
    <IconButton onClick={() => setPanelName('main')}>
      <ActionHome />
    </IconButton>

    <IconButton onClick={() => setPanelName('about')}>
      <InfoIcon />
    </IconButton>

    <IconButton onClick={() => setPanelName('edit')}>
      <SettingsIcon />
    </IconButton>
  </Toolbar>
)

export default SidePanelActions
