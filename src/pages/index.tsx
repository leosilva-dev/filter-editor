import Head from 'next/head'
import { ImageViewr } from '../components/ImageViewr'
import { Grid, Button } from '@material-ui/core';

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Filter editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Grid container spacing={1}>

        <Grid item xs={4} style={{ border: "0px solid black" }}>
        </Grid>

        <Grid container item justify="center" xs={4} spacing={3} style={{ border: "0px solid black" }}>
          <ImageViewr />
        </Grid>

        <Grid item xs={4} style={{ border: "0px solid black" }}>
        </Grid>



      </Grid>

    </div>
  )
}
