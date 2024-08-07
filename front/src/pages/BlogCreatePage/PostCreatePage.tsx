import React, {useEffect, useMemo, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import Utils from "../../utils";
import locale from "../../store/locale";
import {observer} from "mobx-react-lite";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import post from "../../store/post";
import PostAddControl from "./components/PostAddControl/PostAddControl";
import PostBlock from "../PostPage/components/PostBlock/PostBlock";
import {toJS} from "mobx";
import {useNavigate} from "react-router-dom"

const PostCreatePage = observer(() => {

    const navigate = useNavigate();

    const [text, setText] = useState({
        'ru': '',
        'en-US': '',
    });
    const [files, setFiles] = useState([]);

    useEffect(() => {

        post.resetItem(post.newItem);

        const listener = (e) => {
            e.preventDefault();
            e.returnValue = '123'
        }

        window.addEventListener('beforeunload',  listener)

        return () => {
            window.removeEventListener('beforeunload', listener);
        }
    }, [])


    const titleLabel = useMemo(() => {
        return Utils.getLocaleText([
            {locale: 'ru', value: 'Заголовок'},
            {locale: 'en-US', value: 'Title'},
        ], locale.currentLocale.name)
    }, [])

    const blocks = useMemo(() => {

        return post.newItem.blocks.slice().sort((a, b) => a.order - b.order).map(i => {

            return <PostBlock key={i.order} item={i}/>

        })

    }, [post.newItem.blocks.length])

    const handleCreatePost = async () => {
        post.addItem(post.newItem);

        await post.createItem(post.newItem)

        post.newItem = post.defaultItem();
        navigate('/blog')
    }

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
                        value={post.newItem.title[locale.currentLocale.name]}
                        onChange={(e) => {
                            post.updateTitle(e.target.value)
                        }}
                        label={titleLabel}
                        sx={{
                            'input': {
                                textAlign: 'center'
                            }
                        }}
                    />

                    <Grid
                        container
                        spacing={2}
                    >
                        {...blocks}
                    </Grid>

                    {<PostAddControl
                        text={text}
                        setText={setText}
                        files={files}
                        setFiles={setFiles}
                    />}

                </Grid>
                <Grid item xs={2}>

                    <Button
                        disabled={(text['ru'].length === 0 || text['en-US'].length === 0) &&  files.length === 0}
                        onClick={() => {
                            if (text['ru'].length > 0 && text['en-US'].length > 0) {
                                post.addParagraph(text)
                                setText({
                                    'ru': '',
                                    'en-US': ''
                                })
                            } else {
                                post.addImages(files)
                                setFiles([])
                            }
                        }}
                    >
                        Добавить
                    </Button>

                   <Button
                       onClick={handleCreatePost}
                   >
                       Создать пост
                   </Button>

                </Grid>
            </Grid>
        </>
    );
});

export default PostCreatePage;