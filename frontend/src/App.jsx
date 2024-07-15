import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addComment, getComments } from "./redux/comments/actions";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
function App() {
  const { data: comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleAddComment = () => {
    const data = {
      id: "2",
      title: "Task 2",
      completed: false,
      description: "This is a task",
    };
    //dispatch(getComments());

    if (comments) {
      dispatch(
        addComment(data, () => {
          //dispatch(getComments());
        })
      );
    }
  };
  return (
    <>
      <h2>
        <button onClick={handleAddComment}>Added Listado</button> Hola
      </h2>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>COMPLETED</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
        </TableHeader>
        <TableBody>
          {comments &&
            comments.map((comment, index) => (
              <TableRow key={index}>
                <TableCell>{comment.id}</TableCell>
                <TableCell>{comment.title}</TableCell>
                <TableCell>{comment.completed ? "YES" : "NO"}</TableCell>
                <TableCell>{comment.description}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
