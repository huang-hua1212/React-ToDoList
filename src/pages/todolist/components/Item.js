import "./Item.css";
function Item({ item, deleteItem }) {
    const it = item;
    function deleteI(e) {
        e.preventDefault();
        deleteItem((prevData) => {
            const afterData = prevData.filter((i) => i.id !== it.id);
            return afterData;
        });
    }
    return (
        <div className="item">
            <span>
                {it.noteText}/{it.noteDate}/{it.noteTime}
            </span>
            <a href="#" className="removeA">
                <div className="remove" onClick={deleteI}>
                    Remove
                </div>
            </a>
        </div>
    );
}

export default Item;
