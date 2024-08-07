import React, {useEffect, useState} from 'react';
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import {Box, Divider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {observer} from "mobx-react-lite";
import TextareaAutosizeStyled from "../../../../components/TextareaAutosizeStyled/TextareaAutosizeStyled";
import locale from "../../../../store/locale";

const PostAddControl = observer(({text, setText, files, setFiles}) => {

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
                value={text[locale.currentLocale.name]}
                onChange={(e) => {
                    const newText = {...text};
                    newText[locale.currentLocale.name] = e.target.value;
                    setText(newText)
                }}
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