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

const StyledButton = withStyles({
  root: {
    background: '#d44344',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 50,
    width: 110,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 150,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
		<div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Mediboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Autocomplete
              id="combo-box-demo"
              options={state.searchData}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                handleSearchOptionSelect(newValue);
              }}
              style={{ width: 300 }}
              onOpen={(e) => handleSearchOpen(e)}
              renderInput={(params) => <TextField {...params} label="Drug Search" variant="outlined" />}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
		)
}



