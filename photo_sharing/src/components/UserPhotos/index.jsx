import React, { useEffect } from "react";
import { Typography, Card, CardMedia, CardContent, Divider} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";
import Image1 from "../../images/kenobi1.jpg"

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos ({onChange}) {
    const user = useParams();
    const photos = models.photoOfUserModel(user.userId)
    const userModel = models.userModel(user.userId)
    useEffect(() => {
      const name = userModel.first_name + " " + userModel.last_name;;
      const title = "Photos of " + name;
      onChange(title)
    },[userModel])
    const photoDetail = (photo) => {
      return (
        <Card key={photo._id} style={{ marginBottom: '20px' }}>
        <CardMedia
          component="img"
          alt={photo.file_name}
          height="400"
          image={Image1}
        />
        <CardContent>
          <Typography variant="body1">
            Date Time: {photo.date_time}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Comments:
          </Typography>
          {photo?.comments?.length && photo.comments.map((comment) => (
            <div key={comment._id} style={{ marginTop: '10px' }}>
              <Typography variant="body2">
                <Link to={`/users/${comment.user._id}`}>
                  {comment.user.first_name} {comment.user.last_name}
                </Link>
                : {comment.comment}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date Time: {comment.date_time}
              </Typography>
              <Divider />
            </div>
          ))}
        </CardContent>
      </Card>
      ) 
    }
    return (
      <>
      <Typography variant="body1">
        {/* This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user
        from models.photoOfUserModel(userId): */}
      </Typography>
      {
        photos.map(photo => {
         return photoDetail(photo)
        })
      }
      
      </>
    );
}

export default UserPhotos;
