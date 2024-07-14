import React, {useEffect, useMemo, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import Utils from "../../utils";
import locale from "../../store/locale";
import {observer} from "mobx-react-lite";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import post from "../../store/post";
import PostAddControl from "./components/PostAddControl/PostAddControl";

const PostCreatePage = observer(() => {

    const [textItem, setTextItem] = useState({});
    const [imgItem, setImgItem] = useState({});

    const [text, setText] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(() => {

        post.resetItem(post.newItem);

    }, [])


    const titleLabel = useMemo(() => {
        return Utils.getLocaleText([
            {locale: 'ru', value: 'Заголовок'},
            {locale: 'en-US', value: 'Title'},
        ], locale.currentLocale.name)
    }, [])

    return (
        <>
            <Grid
                container
            >
                <Grid item xs={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'sticky',
                            top: 12
                        }}
                    >
                        <ButtonBack/>
                    </Box>
                </Grid>
                <Grid item xs={8}>

                    <TextField
                        fullWidth
                        value={post.newItem.title}
                        onChange={(e) => post.updateItem(post.newItem, 'title', e.target.value)}
                        label={titleLabel}
                        sx={{
                            'input': {
                                textAlign: 'center'
                            }
                        }}
                    />

                    {<PostAddControl
                        text={text}
                        setText={setText}
                        files={files}
                        setFiles={setFiles}
                    />}

                </Grid>
                <Grid item xs={2}>

                    <Button
                        disabled={text.length === 0 && files.length === 0}
                        onClick={() => {
                            if (text.length > 0) {
                                post.addParagraph(text)
                                setText('')
                            } else {
                                post.addImages(files)
                                setFiles([])
                            }
                        }}
                    >
                        Добавить
                    </Button>

                </Grid>
            </Grid>
        </>
    );
});

export default PostCreatePage;