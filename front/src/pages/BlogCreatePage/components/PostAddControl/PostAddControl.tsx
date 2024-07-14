import React, {useEffect, useState} from 'react';
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import {Box, Button, Divider} from "@mui/material";
import {observer} from "mobx-react-lite";
import post from "../../../../store/post";
import TextareaAutosizeStyled from "../../../../components/TextareaAutosizeStyled/TextareaAutosizeStyled";

const PostAddControl = observer(({text, setText, files, setFiles}) => {

    const [textMode, setTextMode] = useState(false);
    const [imgMode, setImgMode] = useState(false);

    useEffect(() => {

        if (text.length > 0) {

        }

    }, [text])

    useEffect(() => {

        post.newItem.files = files;
    }, [files])

    useEffect(() => {

        if (files.length > 0) {
        } else {
        }

    }, [files.length])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'center',
                mt: 2
            }}
        >
            <TextareaAutosizeStyled
                height={200}
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={files.length > 0}
            />

            <Box
            >
                <Divider
                    sx={{
                        width: '100%'
                    }}
                >
                    ИЛИ
                </Divider>
            </Box>

            <ImageUpload
                disabled={text.length > 0}
                files={files}
                setFiles={setFiles}
            />
        </Box>
    );
});

export default PostAddControl;