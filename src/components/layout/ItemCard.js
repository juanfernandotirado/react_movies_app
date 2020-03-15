import React from "react";

import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from "@material-ui/core";

const getStyles = makeStyles({
  media: {
    height: '280px',
    width:'100%',
    maxWidth:'185px'
  },
  root:{
    marginTop:'2rem'
  }
})

const ItemCard = props => {

  const {title, id, poster_path, popularity, release_date, overview, name, first_air_date} = props

  const classes = getStyles()

  let imgPath

  if(poster_path){
    imgPath = "http://image.tmdb.org/t/p/w185/" + poster_path
  }else{
    imgPath = 'https://images.pexels.com/photos/390089/film-movie-motion-picture-390089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=278&w=185'
  }

  const date = release_date ? release_date : first_air_date

  return (
    <Container>
      <Card key={id} className={classes.root}>
        <Grid 
        container direction="row" 
        justify="flex-start" 
        alignItems="center" 
        spacing={2}>
          <Grid item >
            <img 
            className={classes.media} 
            src={imgPath}
            />
          </Grid>
          <Grid item xs={10} >
            <Container>
              <Typography 
              gutterBottom 
              variant='h5' 
              component='h2'>
                <Box textAlign='center'>
                  {title || name}
                </Box>
              </Typography>
              <Typography 
              gutterBottom 
              variant='body2' 
              color='textSecondary' 
              component='p'>
                <Box textAlign='center' marginBottom='2rem'>
                  Release Date : {date} | Popularity: {popularity}
                </Box>
              </Typography>
              <Typography 
              gutterBottom 
              variant='body2' 
              color='textSecondary' 
              component='p'>
                {overview}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default ItemCard
