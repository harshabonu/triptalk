import BlockIcon from '@mui/icons-material/Block';
import { ListItemText, Menu, MenuItem, MenuList, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useBlockChatMutation } from "../../redux/api/api";
import { setIsMoreMenu } from "../../redux/reducers/misc";


import { useAsyncMutation } from "../../hooks/hook";

const MoreMenu = ({ anchorE1, chatId }) => {

  const navigate = useNavigate();

  const { isMoreMenu, selectedBlockChat, setSelectedBlockChat } = useSelector((state) => state.misc);

  const [blockChat, _, blockChatData] = useAsyncMutation(
    useBlockChatMutation
  );

  const dispatch = useDispatch();

 

  const closeFileMenu = () => dispatch(setIsMoreMenu(false));

 
 
  const handleBlockChat = () => {
    console.log(chatId)
    blockChat("blocking Chat...", chatId);
    dispatch(setSelectedBlockChat(false));
  }


  useEffect(() => {
    if (blockChatData) navigate("/");
  }, [blockChatData]);

  return (
    <Menu anchorEl={anchorE1} open={isMoreMenu} onClose={closeFileMenu}>
      <div
        style={{
          width: "10rem",
        }}
      >
        <MenuList>


          <MenuItem onClick={handleBlockChat}>
            <Tooltip title="File">
              < BlockIcon />
            </Tooltip>
            <ListItemText style={{ marginLeft: "0.5rem" }}>Block Chat</ListItemText>

          </MenuItem>
        </MenuList>
      </div>
    </Menu>
  );
};

export default MoreMenu;



