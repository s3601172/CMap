import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import "./Sidebar.css"

const userList = [{
  name: 'user1',
  userType: 'pm'
},
{
  name: 'user2',
  userType:'coursecoordinator'
},
{
  name: 'user3',
  userType: 'superadmin'
}]

function Sidebar(name) {
  return (
    <Menu>
    <List>
      <Link to="/Homepage"><ListItem Button> Username </ListItem></Link>
      <Link to="/Homepage"><ListItem button> Dashboard </ListItem></Link>

      {name && name.name === 'superadmin' && <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Program Details</ExpansionPanelSummary>
          <Link to= "/program-details"><ExpansionPanelDetails>
         <ListItem button>
          P1 Bachelor of Information Technology
          </ListItem>
          </ExpansionPanelDetails></Link>
          <Link to= "/program-details"><ExpansionPanelDetails>
          <ListItem button>
            P2 Bachelor of Computer Science
            </ListItem>
        </ExpansionPanelDetails></Link>
        </ExpansionPanel>
      </ListItem>
}
      {/* <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Program Details</ExpansionPanelSummary>
          <Link to= "/program-details"><ExpansionPanelDetails>
         <ListItem button>
          P1 Bachelor of Information Technology
          </ListItem>
          </ExpansionPanelDetails></Link>
          <Link to= "/program-details"><ExpansionPanelDetails>
          <ListItem button>
            P2 Bachelor of Computer Science
            </ListItem>
        </ExpansionPanelDetails></Link>
        </ExpansionPanel>
      </ListItem> */}

      {name && name.name === 'superadmin' && <ListItem button>
        <ExpansionPanel>
          <ExpansionPanelSummary>View Program Courses</ExpansionPanelSummary>
        <Link to ="/program-courses"><ExpansionPanelDetails>
          <ListItem button>
          P1 Bachelor of Information Technology
          </ListItem>
          </ExpansionPanelDetails></Link>
          <ExpansionPanelDetails>
          <Link to ="/program-courses"><ListItem button>
            P2 Bachelor of Computer Science
            </ListItem></Link>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      }

      {name && name.name === 'superadmin' && <ListItem button>
        <ExpansionPanel>
        <ExpansionPanelSummary>
            View Course Details
        </ExpansionPanelSummary>
        <ExpansionPanelDetails><Link to="/course-details">
          <ListItem button>
          C1 Intro to Programming
          </ListItem></Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
          <ListItem button><Link to ="/course-details">
            C2 Advance Programming Techniques
         </Link> </ListItem>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      }

      <Link to ="/topic-list"><ListItem button> View Course Topics </ListItem></Link>
      </List>
    </Menu>
  )
}

export default Sidebar