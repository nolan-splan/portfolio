import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const useStyles = makeStyles(theme => ({
  speedLink: {
    margin: '1rem',
    marginRight: 'auto',
    marginTop: 'auto',
    position: 'fixed',
    bottom: 0,
    left: 0,
    color: '#fff875',
  },
  anchor: linkStyle,
}))

// this is dumb but can't use useStyles outside a component function or hook function /shrug
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
}

const links = {
  Github: {
    href: 'https://github.com/nsplan',
    target: '_blank',
    style: linkStyle,
    iClassName: 'fa fa-2x fa-github',
  },
  Twitter: {
    href: 'https://twitter.com/SplanNolan',
    target: '_blank',
    style: linkStyle,
    iClassName: 'fa fa-2x fa-twitter',
  },
  LinkedIn: {
    href: 'https://www.linkedin.com/in/nolan-splan-325197a7/',
    target: '_blank',
    style: linkStyle,
    iClassName: 'fa fa-2x fa-linkedin',
  },
  'Email Me': {
    href: 'mailto:nolansplan@outlook.com',
    target: '',
    style: linkStyle,
    iClassName: 'fa fa-lg fa-envelope',
  },
  'Call Me': {
    href: 'tel:231-838-9437',
    target: '',
    style: linkStyle,
    iClassName: 'fa fa-lg fa-phone',
  },
}

const actions = Object.keys(links).map((link) => {
  const ref = links[link]
  const returnObj = {
    icon: <a href={ref.href} target={ref.target} style={ref.style}><i className={ref.iClassName}></i></a>,
    name: link,
  }
  return returnObj
})

export default function SpeedLinks() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <SpeedDial
      ariaLabel="SpeedLinks"
      className={classes.speedLink}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={"up"}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  )
}