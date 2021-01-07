import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { Posts, Form } from './components';
import { getPosts } from './actions/PostActions';
import gabsip from './images/gabsip.jpg';
import useStyles from './styles/appStyles';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Gabsip
        </Typography>
        <img className={classes.image} src={gabsip} alt='gabsip' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
