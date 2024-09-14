import React, {useEffect, useState} from 'react';
import ReorderList from "../components/ReordableList/ReorderList";
import {Box, Button} from "@mui/material";
import paint from "../../../store/paint";
import {useLoaderData} from 'react-router-dom'
import loginPage from "../../LoginPage/LoginPage";

const ITEMS = [
    { id: 0, label: "Item 1", order: 0 },
    { id: 1, label: "Item 2", order: 1 },
    { id: 2, label: "Item 3", order: 2 },
    { id: 3, label: "Item 4", order: 3 },
    { id: 4, label: "Item 5", order: 4 },
    { id: 5, label: "Item 6", order: 5 },
    { id: 6, label: "Item 7", order: 6 },
    { id: 7, label: "Item 8", order: 7 },
    { id: 8, label: "Item 9", order: 8 },
    { id: 9, label: "Item 10", order: 9 },
    { id: 10, label: "Item 11", order: 10 },
    { id: 11, label: "Item 12", order: 11 },
    { id: 11, label: "Item 12", order: 12 },
    { id: 11, label: "Item 12", order: 13 },
    { id: 11, label: "Item 12", order: 14 },
    { id: 11, label: "Item 12", order: 15 },
]

export const loader = async () => {
    const response = await paint.getAllItems()
    return response.paintings;
}

const PaintingAdminPage = () => {


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

                        await paint.updateOrderFrom(newItems)
                    }}
                >
                    Сохранить изменения
                </Button>
            </Box>
        </Box>

    );
};

export default PaintingAdminPage;