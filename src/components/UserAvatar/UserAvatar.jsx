import Avatar from "@mui/material/Avatar"

const UserAvatar = ({ userName }) => {
  return (
    <Avatar sx={{ bgcolor: "#EF2F7C", width: 60, height: 60 }}>
      {userName}
    </Avatar>
  );
};

export default UserAvatar;
