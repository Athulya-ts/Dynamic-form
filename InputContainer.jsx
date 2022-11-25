import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default class InputContainer extends React.Component{
    render(){    
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        component="img"
          height="140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.msg}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.password}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
}