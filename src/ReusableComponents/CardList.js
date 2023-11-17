import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

function CardList() {
  return (
    <div>
         <Card className='pig'>
                            <CardHeader title="28,600" />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    28,60,000
                                </Typography>
                            </CardContent>
                        </Card>
    </div>
  )
}

export default CardList