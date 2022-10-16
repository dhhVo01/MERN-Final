import httpCommon from "../http-common";

function addItem(data){
    return httpCommon.post("/todolist", data);
}
function getAllItem(){
    return httpCommon.get("/todolist");
}
function deleteItem(itemId){
    return httpCommon.delete(`/todolist/${itemId}`);
}
export { addItem, getAllItem, deleteItem };