import React from 'react';
import './Message.css';
import {Card,CardContent,Typography} from '@material-ui/core';

function Message({message,username}) {
   const iname = username === message.username;

    return ( 
    
             <div className={`msg  ${iname && "msg__user"}`}> 
                 <Card className={iname ? "msg__usercard" : "msg__gestcard"} >
                    <CardContent>
                        <Typography color="white"
                        variant="h5"
                        component="h2">
                        {message.username}:{message.input}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
       
    );
}

export default Message;