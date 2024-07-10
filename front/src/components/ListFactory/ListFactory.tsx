import PaintItem from "../PaintItem/PaintItem.tsx";
import paint from "../../store/paint.ts";

const ListFactory = ({type}) => {

    const list = {
        component: null,
        store: null,
    }
    switch (type) {
        case "paint": {
            list.component = PaintItem;
            list.store = paint;
            break;
        }
        case "project": {
            
        }
    }
    
    return (
        <div>
            
        </div>
    );
};

export default ListFactory;