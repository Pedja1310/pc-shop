import { useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllUsersAction } from "../store/actions/usersActions";

const UsersTable = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <h5>Users Table - Not finished</h5>
      </Row>
      <Row>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UsersTable;
