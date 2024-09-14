import React, {useEffect, useState} from 'react';
import ReorderList from "../components/ReordableList/ReorderList";
import {Box, Button} from "@mui/material";
import paint from "../../../store/paint";
import {useLoaderData} from 'react-router-dom'
import project from "../../../store/project";


export const loader = async () => {
    const response = await paint.getAllItems()
    return response.paintings;
}

export const projectsLoader = async () => {
    const response = await project.getAllItems();
    console.log(response)
    return response.items
}

const PaintingAdminPage = ({type}) => {

    const loaderData = useLoaderData();

    const [items, setItems] = useState(loaderData)
    console.log(items)

    return (
        <Box
            sx={{
            }}
        >
            <Box
                sx={{
                    overflow: 'auto',
                    height: '80vh'
                }}
            >
                <ReorderList
                    items={items}
                    setItems={setItems}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4
                }}
            >
                <Button
                    onClick={async () => {
                        const newItems = items.map((i, index) => {
                            i.order = index + 1
                            return i;
                        })

                        setItems(newItems)


                        switch (type) {
                            case "painting":
                                await paint.updateOrderFrom(newItems)
                                break;
                            case "project":
                                await project.updateOrderFrom(newItems)
                                break;
                        }
                    }}
                >
                    Сохранить изменения
                </Button>
            </Box>
        </Box>

    );
};

export default PaintingAdminPage;