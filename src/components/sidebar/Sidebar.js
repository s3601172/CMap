import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import "./Sidebar.css"

function Sidebar() {
  return (
    <Menu>
    <List>
      <ListItem button>
        <ListItemText>Username</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>

      <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Program Details</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ListItem button>
          P1 Bachelor of Information Technology
          </ListItem>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <ListItem button>
            P2 Bachelor of Computer Science
            </ListItem>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>

      <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Program Courses</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ListItem button>
          P1 Bachelor of Information Technology
          </ListItem>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <ListItem button>
            P2 Bachelor of Computer Science
            </ListItem>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>

      <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Course Details</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ListItem button>
          C1 Intro to Programming
          </ListItem>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <ListItem button>
            C2 Advance Programming Techniques
            </ListItem>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>

      <ListItem button>
        <ListItemText>View Course Topics</ListItemText>
      </ListItem>
      </List>
    </Menu>
  )
}

export default Sidebar