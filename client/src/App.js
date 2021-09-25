import './App.css';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
    appBar: {
        margin: '0 0 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar position='static' color='primary' className={classes.appBar}>
                <Typography variant={'h3'} align='center'>Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}

export default App;
