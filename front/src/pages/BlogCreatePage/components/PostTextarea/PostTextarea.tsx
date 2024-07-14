import React, {useState} from 'react';
import TextareaAutosizeStyled from "../../../../components/TextareaAutosizeStyled/TextareaAutosizeStyled";


const PostTextarea = () => {

    const [value, setValue] = useState('')

    return (
        <>
            <TextareaAutosizeStyled
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default PostTextarea;