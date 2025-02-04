import React, { useEffect } from "react";
import {Typography, Card, CardContent} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail({onChange}) {
    const user = useParams();
    const useModal = models.userModel(user.userId)
    useEffect(() => {
      const name = useModal.first_name + " " + useModal.last_name;
      if(name) {
        onChange(name)
      }
    },[useModal])
    return (
        <>
          {/* <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {user.userId}.
            You can fetch the model for the user from models.userModel.
          </Typography> */}
          <Card>
      <CardContent >
        <Typography variant="h5" gutterBottom style={{ lineHeight: '2' }}>
          {useModal.first_name} {useModal.last_name}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '3' }}>
          Location: {useModal.location}
        </Typography>
        <Typography variant="body1">
          Description: <span dangerouslySetInnerHTML={{ __html: useModal.description }} />
        </Typography>
        <Typography variant="body1" style={{ lineHeight: '3' }}>
          Occupation: {useModal.occupation}
        </Typography>
        <Link to={`/photos/${user.userId}`} replace>
          <Typography>
            Link to Image
          </Typography>
        </Link>
      </CardContent>

    </Card>
        </>
    );
}

export default UserDetail;
