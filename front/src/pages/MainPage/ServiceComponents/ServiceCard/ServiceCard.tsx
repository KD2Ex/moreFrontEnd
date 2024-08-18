import React from 'react';
import LocaleText from "../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, List, ListItemText, Paper} from "@mui/material";

const ServiceCard = ({title, listItems, flex, height, children}) => {


    return (
        <Grid
            item
            md={6}
        >

            <Paper
                variant={'outlined'}
                sx={{
                    //bgcolor: (theme) => theme.palette.background.paper,
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: (theme) => theme.palette.primary.borderLight,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    height: height,
                }}
            >
                <LocaleText
                    useDefault
                    variant={'h4'}
                    fontWeight={'bold'}
                    sx={{
                        textAlign: 'center'
                    }}
                    localeList={[...title]}
                />

                <List
                    sx={{
                        width: '100%',
                        flex: listItems.length > 0 ? 1 : 0,
                        '.MuiListItemText-root': {
                            'span': {
                                fontSize:'16px',
                            }
                        }
                    }}
                >
                    {listItems.map((i, index) =>
                        <ListItemText
                            key={index}
                        >
                            {i}
                        </ListItemText>
                    )}
                </List>

                <Box>
                    {children}
                </Box>
            </Paper>
        </Grid>
    );
};

export default ServiceCard;