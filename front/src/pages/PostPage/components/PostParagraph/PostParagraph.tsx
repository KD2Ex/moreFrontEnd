import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../../../store/locale";

const PostParagraph = observer(({block}) => {

    useEffect(() => {
        console.log(block)
    }, [])

    return (
        <Grid
            item
            xs={12}
            sx={{
                textWrap: 'wrap'
            }}
        >
            <Typography
                sx={{
                    textAlign: 'justify',
                    width: '100%',
                    textWrap: 'wrap',
                    wordWrap: 'break-word'
                }}
            >
                {block.value[locale.currentLocale.name]}
            </Typography>
        </Grid>
    );
});

export default PostParagraph;