import React from 'react'

import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "material-ui";
import { Button } from 'material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { privateUrls} from '../../utils/urlUtils'
import FirebaseService from '../../services/FirebaseService';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export const DataTable = (({data}) => {
    const classes = useStyles()

    const remove = (id) => {
        FirebaseService.remove(id, 'leituras')
    }

    return <React.Fragment>
                <Typography variant="headline" component="h2">Add New</Typography>
                <Table selectable={false}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Key</TableCell>
                            <TableCell>Temperature</TableCell>
                            <TableCell>Humidity</TableCell>
                            <TableCell>Client</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((item, index) =>
                                <TableRow key={index}>
                                    <TableCell>{item.key}</TableCell>
                                    <TableCell>
                                        {item.temperatura}
                                    </TableCell>
                                    <TableCell>{item.umidade}</TableCell>
                                    <TableCell>{item.cliente}</TableCell>
                                    <TableCell>{item.data}</TableCell>
                                    <TableCell>
                                        <Button className={classes.button} variant="contained" color="primary"
                                        onClick={ () => remove(item.key)}>
                                            Remove
                                        </Button>
                                        <Button className={classes.button} variant="contained" color="secondary" component={props => 
                                            <Link to={privateUrls.edit.pathWithouParam + item.key}
                                                {...props}/>}>
                                                    Edit
                                                </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </React.Fragment>
})