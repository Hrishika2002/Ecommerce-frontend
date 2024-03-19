import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/action/action";
import { useEffect } from "react";
import { CardComp } from "../card";
import Grid from '@mui/material/Grid';
export const Shop = () => {
    const category = useSelector(state => state.user.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (!category || !Array.isArray(category) || category.length !== 5) {
        return null;
    }

    return (
        <div>

            {category.map((categoryItem, index) => (
                <div key={index}>
                    <h1 style={{ textAlign: "center", paddingTop: "40px",textDecorationLine:"underline", textDecorationStyle:"double" }}>
                        <span style={{ color: "black", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
                            {categoryItem.title.toUpperCase() + " "}
                        </span>
                        <span style={{ color: "transparent", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
                            COLLECTION
                        </span>
                    </h1>

                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">


                        {categoryItem.items.slice(0, 4).map((item, itemIndex) => (

                            <CardComp key={item.id} item={item} />
                        ))}
                    </Grid>

                </div>
            ))}
        </div>
    );
};
