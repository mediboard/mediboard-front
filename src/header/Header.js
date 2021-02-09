import { React, useState } from 'react'
import { withStyles, makeStyles, fade } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import DrugsHttpClient from '../clientapis/DrugsHttpClient';

const drugsHttpClient = new DrugsHttpClient();

const LoginButton = withStyles({
  root: {
    background: '#8186FF',
    borderRadius: 4,
    border: 0,
    color: 'black',
    height: 30,
    width: 100,
    top: '25%',
    float: 'right',
    marginRight: 15,
  },
  text: {
    fontSize: 14,
  }
})(Button);

const RegisterButton = withStyles({
  root: {
    background: 'black',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 30,
    width: 100,
    top: '25%',
    float: 'right',
    marginRight: 40,
  },
  text: {
    fontSize: 14,
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: 20,
    marginTop: 20,
    width: '100%'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
    width: '35%',
    display: 'inline-block'
  },
  option: {
    display: 'inline',
    paddingLeft: 10,
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'inline-block',
  },
  top: {
    display: 'flex',
    width: '100%',
  },
  topLeft: {
    position: 'relative',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    width: '70%',
    display: 'inline-flex',
    textAlign: 'left',
    float: 'left',
  },
  bottom: {
    width: '100%',
    float: 'left',
    textAlign: 'left',
    display: 'inline-block',
    marginTop: 20,
  },
  right: {
    width: '30%',
    float: 'right',
  },
  search: {
    textAlign: 'center',
    display: 'inline-block',
    width: '65%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const topDrugs = [
  { title: 'BLAK' },
  { title: 'WHITE'}
]

export default function Header(props) {
  const [state, setState] = useState({
    'searchData': [],
  })

	const classes = useStyles();

  const handleSearchOpen = (e) => {
    e.target.loading = true;

    drugsHttpClient.getTopDrugs().then((response) => {
      setState(prevState => ({
        ...prevState,
        'searchData': response.message.drugs
      }));
    }).catch((error) => {
      alert("Error getting top drugs");
      console.log(error);
    }).finally(() => {
      e.target.loading = false;
    });
  }

  const handleSearchOptionSelect = (value) => {
    if (value != null) {
      props.setSelectedDrug(value.name);
    }
  }

	return (
		<div className={classes.header}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <Typography variant="h3" className={classes.title}>
            The Medical Board
          </Typography>
          <div className={classes.search}>
            <Autocomplete
              id="combo-box-demo"
              options={state.searchData}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                handleSearchOptionSelect(newValue);
              }}
              style={{ width: 300, marginRight: 'auto', marginLeft: 'auto'}}
              onOpen={(e) => handleSearchOpen(e)}
              renderInput={(params) => <TextField {...params} label="Drug Search" variant="outlined" />}
            />
          </div>
        </div>
        <div className={classes.right}>
          <RegisterButton size="small" href="/register">Register</RegisterButton>
          <LoginButton size="small">Login</LoginButton>
        </div>
      </div>
      <div className={classes.bottom}>
        <Typography variant="h5" className={classes.option}>
          HOME
        </Typography>
        <Typography variant="h5" className={classes.option}>
          Treatments 
        </Typography>
         <Typography variant="h5" className={classes.option}>
          Conditions 
        </Typography>
        <Typography variant="h5" className={classes.option}>
          Mission 
        </Typography>
      </div>
    </div>
		)
}



