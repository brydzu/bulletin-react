import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import AttachmentIcon from 'material-ui-icons/Attachment'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'

const styles = {
  card: {
    marginBottom: 15
  },
  titleColor: {
    color: blue[800]
  },
  dateColor: {
    color: grey[500]
  },
  categoryColor: {
    color: '#ffb41f'
  },
  media: {
    height: 250
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const PostPreview = ({
  classes,
  title,
  imageURL,
  date,
  id,
  style,
  category
}) => {
  const postDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card} style={style}>
      <CardContent>
        <Typography type="caption" className={classes.categoryColor}>
          {category}
        </Typography>
        <Typography
          type="headline"
          className={classes.titleColor}
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          className={classes.dateColor}
          type="subheading"
          component="h3"
        >
          {postDate}
        </Typography>
        {imageURL && <CardMedia className={classes.media} image={imageURL} />}
      </CardContent>
      <Divider />
      <CardActions>
        <Button href={`/post/${id}`} dense color="primary">
          Read More
        </Button>
        <Button dense color="primary">
          <AttachmentIcon /> Attachment
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(PostPreview)
