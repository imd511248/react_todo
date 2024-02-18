import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTodo, addTodo, removeTodo } from "../../slice/todoSlice";

export const InputPage = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    title: "",
  });
  const [found, setFound] = useState(true);
  const [edit, setEdit] = useState();
  const { list } = useSelector((state) => state.todo);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  /////////////////////////////////////
  function hello() {
    setTimeout(() => {
      let popup = document.getElementById("popup");
      if (popup) {
        popup.style.visibility = "hidden";
      }
    }, 800);
  }
  const AddDataHandler = () => {
    let popup = document.getElementById("popup");
    if (popup) {
      popup.style.visibility = "visible";
    }
    hello();
    ////////////////////
    if (edit) {
      let { title } = inputData;
      const obj = { edit, title };
      dispatch(UpdateTodo(obj));
      setInputData({ title: "" });
      setEdit("");
    } else {
      const id = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
      let { title } = inputData;
      const obj = { id, title };
      dispatch(addTodo(obj));
      setInputData({ title: "" });
    }
  };
  useEffect(() => {
    if (inputData.title !== "") {
      setFound(false);
    } else {
      setFound(true);
    }
  }, [inputData]);
  const editHandler = (id, title) => {
    setEdit(id);
    setInputData({ title: title });
  };
  const deleteHandler = (id) => {
    dispatch(removeTodo({ id }));
  };
  console.log(list);
  return (
    <>
      <div className="w-full border border-red-500 rounded-md overflow-hidden flex justify-between h-10">
        <input onChange={inputHandler} name="title" value={inputData.title} type="text" placeholder="Enter type here..." className="w-full rounded-md outline-none pl-5" />
        <button onClick={AddDataHandler} className="bg-green-400 text-lg w-fit px-3 rounded-sm" disabled={found}>
          {!edit ? "ADD" : "UPDATE"}
        </button>
      </div>

      <div className="w-full flex flex-col border mt-2 rounded-sm">
        {list.length !== 0
          ? list.map((item, i) => {
              return (
                <>
                  <div className="flex justify-between px-3 py-1" key={i}>
                    <div className="flex justify-center gap-x-3 text-2xl text-gray-700">
                      <input type="checkbox" name="" className="cursor-pointer" />
                      <p>{item.title}</p>
                    </div>
                    <div className="flex gap-x-5 text-xl">
                      <button onClick={() => editHandler(item.id, item.title)} className="fa-solid fa-pen text-gray-700"></button>
                      <button onClick={() => deleteHandler(item.id)} className="fa-solid fa-trash-can text-red-600"></button>
                    </div>
                  </div>
                </>
              );
            })
          : ""}
      </div>
      {/*My done section  */}

      {/* <p className="mt-5">Completed ( {check.length} )</p>
      <div className="w-full flex flex-col border mt-2 rounded-sm">
        {check.length !== 0
          ? check.map((item) => (
              <div className="flex justify-between px-3 py-1">
                <div className="flex justify-center gap-x-3 text-2xl text-gray-700">
                  <input type="checkbox" checked={true} name="" className="cursor-pointer" />
                  <p>{item?.title}</p>
                </div>
                <div className="flex gap-x-5 text-xl">
                  <button onClick={() => editHandle(item.id, item.title)} className="fa-solid fa-pen  text-gray-700"></button>
                  <button onClick={() => deleteHandle(item.id)} className="fa-solid fa-trash-can text-red-600"></button>
                </div>
              </div>
            ))
          : ""}
      </div> */}
    </>
  );
};
