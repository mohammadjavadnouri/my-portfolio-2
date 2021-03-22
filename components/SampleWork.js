import React from "react";
import Link from "next/link";
import styles from "./SampleWork.module.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SampleWork = (props) => {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.content1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content2}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href={props.link}>
            {props.lang === "fa" ? "بیشتر بدانید" : "more"}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default SampleWork;
