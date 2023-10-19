type AddressType = {
    street: string;
    city: string;
};

type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    title: string
    users: Array<UserType>;
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>{props.title}</h2>

            <ul>
                {props.users.map((objectFromUsersArray, index) => (
                    <li key={objectFromUsersArray.id} id={`hw01-user-${objectFromUsersArray.id}`}>
                        <strong>{objectFromUsersArray.name}</strong> (Age: {objectFromUsersArray.age})<strong> Address:</strong>
                        {objectFromUsersArray.address.street}, {objectFromUsersArray.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
