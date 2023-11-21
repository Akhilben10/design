import { Card, CardContent, Divider } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import UserCard from '../components/CardComponent/UserCard'
import PrimarySearchAppBar from '../components/SearchBar';

function Users() {
    return (


        <div>
            <br />
<br/>
<Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>



                
                        <Grid container spacesing={2}>
                            <Grid item xs={12}>
                        <Card>

                          <CardContent>
                            <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h1>Cards</h1>

                            </Grid>
                            <Grid item xs={6}>
                                <PrimarySearchAppBar />
                            </Grid>
                            </Grid>
                            </CardContent>
                           </Card>
                           </Grid>
                        </Grid>

                   

                <Divider />
                <Grid item xs={4}>
                    <UserCard
                        title='Phoebe'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />
                </Grid>
                <Grid item xs={4}>
                    <UserCard
                        title='Gaetano'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />

                </Grid>
                <Grid item xs={4}>
                    <UserCard
                        title='Elisabeth'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />

                </Grid>

                <Grid item xs={4}>
                    <UserCard
                        title='Phoebe'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />
                </Grid>
                <Grid item xs={4}>
                    <UserCard
                         title='Gaetano'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />

                </Grid>
                <Grid item xs={4}>
                    <UserCard
                        title='Elisabeth'
                        imageUrl='data:image/jpeg;base64,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'
                        body='Dynamic Operations Officer'
                        content='Use the neural RSS application, then you can program the bluetooth firewall! #DOO'
                        email='Phoebe.ben@gmail.com'
                    />

                </Grid>

            </Grid>
        </div>

    )
}

export default Users