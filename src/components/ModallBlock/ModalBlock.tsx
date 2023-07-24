import { ChangeEvent, FC, useState } from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import { IModal, IModalState } from "./ModalBlockTypes";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from "@mui/icons-material/Campaign";
import SubjectIcon from "@mui/icons-material/Subject";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import DoneIcon from "@mui/icons-material/Done";
import HistoryIcon from "@mui/icons-material/History";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CurtainsClosedIcon from "@mui/icons-material/CurtainsClosed";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import ShareIcon from "@mui/icons-material/Share";
import style from "./ModalBlock.module.scss";
import classNames from "classnames";

const ModalBlock: FC<IModal> = ({ openModal, showModal }) => {
  const [valueInput, setValueInput] = useState("Axios");
  const [state, setState] = useState<IModalState>({
    taskDesc: true,
    comment: false
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const handleOpenChange = () => {
    setState({
      ...state,
      taskDesc: !state.taskDesc
    });
  };
  const handleblur = () => {
    setState({
      ...state,
      taskDesc: true
    });
  };
  const openUserCommentInput = () => {
    setState({
      ...state,
      comment: !state.comment
    });
  };
  const handleBlurComment = () => {
    setState({
      ...state,
      comment: true
    });
  };
  return (
    <div
      onClick={openModal}
      className={classNames(style.modal, {
        [style.isActive]: showModal
      })}
    >
      <div onClick={e => e.stopPropagation()} className={style.task_desc}>
        <div className={style.modalBlock}>
          <div className={style.modalBlock_header}>
            <div className={style.taskName}>
              <div className={style.iconBlock}>
                <ComputerIcon />
              </div>
              <div className={style.inputBlock}>
                <input
                  type="text"
                  onChange={e => handleChange(e)}
                  value={valueInput}
                />
              </div>
              <div className={style.closeBlock}>
                <h4 onClick={openModal}>X</h4>
              </div>
            </div>
          </div>
          <span>
            in List <b>todo</b>
          </span>
          <div className={style.modalBlock_downContent}>
            <div className={style.downLeft}>
              <div className={style.membersBlock}>
                <div className={style.members}>
                  <span>Members</span>
                  <div className={style.userBlock}>
                    <div>
                      <PersonIcon />
                    </div>
                    <div>
                      <AddIcon />
                    </div>
                  </div>
                </div>
                <div className={style.notigication}>
                  <div className={style.notigication_blocks}>
                    <span>Notifications</span>
                    <div>
                      <span>Watch</span>
                      <VisibilityIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.modallDescription}>
                <div className={style.modalHeader}>
                  <div className={style.modalHeader_leftBlock}>
                    <div className={style.iconB}>
                      <MenuIcon />
                    </div>
                    <div className={style.desc}>
                      <span>Description</span>
                    </div>
                  </div>
                  <div className={style.modalHeader_rightBlock}>
                    <div>
                      <span onClick={handleOpenChange}>Edit</span>
                    </div>
                  </div>
                </div>
                {state.taskDesc
                  ? <div className={style.modalTaskDesc}>
                      <div
                        onClick={handleOpenChange}
                        className={style.descrptionDiv}
                      >
                        <span>Add more detailed description...</span>
                      </div>
                    </div>
                  : <div className={style.modalTaskDescChangeBlock}>
                      <textarea
                        autoFocus={true}
                        onBlur={handleblur}
                        placeholder="typing..."
                      />
                      <div className={style.saveBlock}>
                        <div className={style.saveBlock_leftSection}>
                          <div className={style.save}>
                            <span>Save</span>
                          </div>
                          <div className={style.cancel}>
                            <span>Canel</span>
                          </div>
                        </div>
                        <div className={style.shareblock}>
                          <CampaignIcon />
                          <div>
                            <span>Share feedback</span>
                          </div>
                        </div>
                      </div>
                    </div>}
              </div>
              <div className={style.activityBlock}>
                <div className={style.activityBlock_icons}>
                  <div>
                    <SubjectIcon />
                  </div>
                  <div>
                    <span>Activity</span>
                  </div>
                </div>
                <div className={style.hideDetalis}>
                  <span>Hide detalis</span>
                </div>
              </div>
              <div className={style.commentUser}>
                <div className={style.userIcon}>
                  <PersonIcon />
                </div>
                {state.comment
                  ? <div
                      onClick={openUserCommentInput}
                      className={style.commentInput}
                    >
                      <span>Write comment...</span>
                    </div>
                  : <div className={style.inputForComment}>
                      <textarea
                        autoFocus={true}
                        onBlur={handleBlurComment}
                        placeholder="Write a  your comment"
                      />
                      <button>Save</button>
                    </div>}
              </div>
              <div className={style.commentBlock}>
                  <div className={style.commentBlock_header}>
                      <div className={style.iconPerson}>
                          <PersonIcon />
                      </div>
                      <h4>Name Lastname</h4>
                      <p>Date</p>
                  </div>
                  <div className={style.comentContnet}>
                      <span>this is comment</span>
                  </div>
              </div>
            </div>
            <div className={style.downRightComponent}>
              <h5>Add to card</h5>
              <div className={style.coostomBlock}>
                <PersonIcon sx={{ fontSize: "15px" }} />
                <span>Members</span>
              </div>
              <div className={style.coostomBlock}>
                <TurnedInNotIcon sx={{ fontSize: "15px" }} />
                <span>Labels</span>
              </div>
              <div className={style.coostomBlock}>
                <DoneIcon sx={{ fontSize: "15px" }} />
                <span>Checklist</span>
              </div>
              <div className={style.coostomBlock}>
                <HistoryIcon sx={{ fontSize: "15px" }} />
                <span>Dates</span>
              </div>
              <div className={style.coostomBlock}>
                <AttachFileIcon sx={{ fontSize: "15px" }} />
                <span>Attachment</span>
              </div>
              <div className={style.coostomBlock}>
                <CurtainsClosedIcon sx={{ fontSize: "15px" }} />
                <span>Cover</span>
              </div>
              <div className={style.coostomBlock}>
                <FolderIcon sx={{ fontSize: "15px" }} />
                <span>Custom Fields</span>
              </div>
              <h5>Pover-Ups</h5>
              <div className={style.opacityBlock}>
                <span>+</span>
                <span>Add Power-ups</span>
              </div>
              <h5>Automation</h5>
              <div className={style.opacityBlock}>
                <span>+</span>
                <span>Add button</span>
              </div>
              <h5>Actions</h5>
              <div className={style.coostomBlock}>
                <ArrowForwardIcon sx={{ fontSize: "15px" }} />
                <span>Move</span>
              </div>
              <div className={style.coostomBlock}>
                <ContentCopyIcon sx={{ fontSize: "15px" }} />
                <span>Copy</span>
              </div>
              <div className={style.coostomBlock}>
                <DesktopMacIcon sx={{ fontSize: "15px" }} />
                <span>Make template</span>
              </div>
              <div className={style.coostomBlock}>
                <PhotoAlbumIcon sx={{ fontSize: "15px" }} />
                <span>Archive</span>
              </div>
              <div className={style.coostomBlock}>
                <ShareIcon sx={{ fontSize: "15px" }} />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlock;
