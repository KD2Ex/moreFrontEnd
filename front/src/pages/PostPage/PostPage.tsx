import React from 'react';
import {Form, Link, useLoaderData, useNavigate} from "react-router-dom";
import post from "../../store/post";
import {Box, Button, Grid, Typography} from "@mui/material";
import LocaleText from "../../components/Locale/LocaleText/LocaleText";
import PostImage from "./components/PostImage/PostImage";
import PostParagraph from "./components/PostParagraph/PostParagraph";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const items = [
    {id: 1, order: 0, type: "text", value: "Getting inspiration from the Living by Design Showhouse, I picked out lights from Lamps Plus  to help one of my clients brighten up their living room. They loved how I used my Mitzi collection to create depth in the showhouse and they wanted something similar in their space. They have amazing natural light coming in during the day but in the evening they struggled to create the perfect ambience. When it comes to a living room, I like to layer a variety of floor and table lamps to add dimension to the space. Here, I chose two table lamps and two floor lamps, one in each corner to balance the lighting. The gourd table lamp might be my favorite. It’s sculptural and modern. I’ve always loved pharmacy floor lamps. They’re timeless and work with so many different styles. I chose the jug lamp for a traditional touch and contrasted it with a contemporary arc floor lamp. And lastly, I hung art above the sofa and brought in pillows and throws to make it all cozy. Now the space feels perfectly balanced. Shop LampPlus.com for lighting, furniture, and home decor for indoor and outdoor spaces", gridSize: 12},
    {id: 2, order: 1, type: "img", value: "https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w", gridSize: 4 },
    {id: 3, order: 2, type: "img", value: "https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w", gridSize: 4 },
    {id: 4, order: 3, type: "img", value: "https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w", gridSize: 4 },
    {id: 5, order: 4, type: "text", value: "Getting inspiration from the Living by Design Showhouse, I picked out lights from Lamps Plus  to help one of my clients brighten up their living room. They loved how I used my Mitzi collection to create depth in the showhouse and they wanted something similar in their space. They have amazing natural light coming in during the day but in the evening they struggled to create the perfect ambience. When it comes to a living room, I like to layer a variety of floor and table lamps to add dimension to the space. Here, I chose two table lamps and two floor lamps, one in each corner to balance the lighting. The gourd table lamp might be my favorite. It’s sculptural and modern. I’ve always loved pharmacy floor lamps. They’re timeless and work with so many different styles. I chose the jug lamp for a traditional touch and contrasted it with a contemporary arc floor lamp. And lastly, I hung art above the sofa and brought in pillows and throws to make it all cozy. Now the space feels perfectly balanced. Shop LampPlus.com for lighting, furniture, and home decor for indoor and outdoor spaces", gridSize: 12 },
    {id: 5, order: -1, type: "img", value: "https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w", gridSize: 6 },
    {id: 5, order: -2, type: "img", value: "https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w", gridSize: 6 },
]

export async function loader({params}) {
    const postItem = await post.getItem(params.id)
    return {postItem};
}

const PostPage = () => {

    const { postItem } = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    xs={2}
                    sx={{
                        position: 'sticky',
                        top: 12,
                        mt: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'fit-content'
                    }}
                >
                    <ButtonBack/>
                </Grid>

                <Grid
                    item
                    xs={8}
                    container
                    sx={{
                        borderTop: '1px solid gray',
                        margin: 'auto'
                    }}
                >
                    <Grid item xs={2}/>

                    <Grid
                        item
                        xs
                        sx={{
                        }}
                    >
                        <LocaleText
                            variant={'h4'}
                            useDefault
                            localeList={[
                                `${postItem.name}`,
                                'Title'
                            ]}
                            sx={{
                                margin: 'auto',
                                textAlign: 'center',
                                my: 3
                            }}
                        />
                    </Grid>

                    <Grid item xs={2}>

                    </Grid>


                    <Grid
                        container
                        spacing={4}
                    >
                        {items.sort((a, b) => a.order - b.order).map(i => {

                            if (i.type === "text") {
                                return <PostParagraph text={i.value}/>
                            }

                            if (i.type === "img") {
                                return <PostImage src={i.value} gridSize={i.gridSize}/>
                            }

                        })}
                    </Grid>
                </Grid>
                <Grid item xs={2}/>

            </Grid>

        </>

    );
};

export default PostPage;