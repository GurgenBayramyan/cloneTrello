import { ChangeEvent, FC, useState } from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import { IModal, IModalState } from "./ModalBlockTypes";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from "@mui/icons-material/Campaign";
import SubjectIcon from "@mui/icons-material/Subject";
import HistoryIcon from "@mui/icons-material/History";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CurtainsClosedIcon from "@mui/icons-material/CurtainsClosed";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import ShareIcon from "@mui/icons-material/Share";
import DoneIcon from "@mui/icons-material/Done";
import classNames from "classnames";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Openable from "hoc/Openable/Openable";
import MembersContent from "components/MembersContent/MembersContent";
import EditLabelsContent from "components/EditLabelsContent/EditLabelsContent";
import CheckList from "components/CheckList/CheckList";
import DatesContent from "components/DatesContent/DatesContent";
import AttackContent from "components/AttackContent/AttackContent";
import CoverContent from "components/CoverContent/CoverContent";
import CustomContent from "components/CustomContent/CustomContent";
import MoveContent from "components/MoveContent/MoveContent";
import CopyBlock from "components/CopyBlock/CopyBlock";
import RefreshIcon from "@mui/icons-material/Refresh";
import UserNameIcon from "components/UserNameIcon/UserNameIcon";
import ShareBlock from "components/ShareBlock/ShareBlock";
import UpModalComponent from "components/UpModalComponent/UpModalComponent";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setShow, setShowModal } from "store/slices/modalSlice/modalSlice";
import { modalBlockSelector } from "store/selectors";
import Archive from "components/Archive/Archive";
import DeleteModal from "components/DeleteModal/DeleteModal";
import style from "./ModalBlock.module.scss";


const ModalBlock: FC<IModal> = () => {
  const [valueInput, setValueInput] = useState("Axios");
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(modalBlockSelector);
  const modal = useAppSelector(state => state.modallMeniu)
  const [hide, setHide] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [state, setState] = useState<IModalState>({
    taskDesc: true,
    comment: false,
  });
  const openModal = () => {
    dispatch(setShowModal(!modal.showModal))
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const MembersModal = Openable(
    () => <MembersContent />,
    "members",
    PersonIcon
  );
  const EditLabelModal = Openable(
    () => <EditLabelsContent />,
    "Labels",
    TurnedInNotIcon
  );
  const CheckListModal = Openable(() => <CheckList />, "Checklist", DoneIcon);
  const DatesModal = Openable(() => <DatesContent />, "Dates", HistoryIcon);
  const Attachment = Openable(
    () => <AttackContent />,
    "Attachment",
    AttachFileIcon
  );
  const CoverModal = Openable(
    () => <CoverContent />,
    "Cover",
    CurtainsClosedIcon
  );
  const CustomModal = Openable(
    () => <CustomContent />,
    "CustomFields",
    FolderIcon
  );
  const MoveModal = Openable(() => <MoveContent />, "Move", ArrowForwardIcon);
  const CopyModal = Openable(() => <CopyBlock />, "Copy", ContentCopyIcon);
  const ShareModal = Openable(() => <ShareBlock />, "Share", ShareIcon);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const handleOpenChange = () => {
    setState({
      ...state,
      taskDesc: !state.taskDesc,
    });
  };
  const handleblur = () => {
    setState({
      ...state,
      taskDesc: true,
    });
  };
  const openUserCommentInput = () => {
    setState({
      ...state,
      comment: !state.comment,
    });
  };
  const handleBlurComment = () => {
    setState({
      ...state,
      comment: true,
    });
  };

  const openTemplateModal = () => {
    setShowUp(false);
    dispatch(setShow(!modal.upModalShow));
  };
  const openArchiveBlock = () => {
    dispatch(setShow(false));
    setShowUp(!showUp);
  };
  const handleClose = () => {
    setShowUp(false);
  };
  const handleChangeHide = () => {
    setHide(!hide);
  };
  const openDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  return (
    <div
      onClick={openModal}
      className={classNames(style.modal, {
        [style.isActive]: modal.showModal,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={style.task_desc}>
        {!!modalState.upModalShow && <UpModalComponent />}
        {!!showUp && <Archive />}
        <div className={style.modalBlock}>
          <div className={style.modalBlock_header}>
            <div className={style.taskName}>
              <div className={style.iconBlock}>
                <ComputerIcon />
              </div>
              <div className={style.inputBlock}>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={valueInput}
                />
              </div>
              {!modalState.upModalShow && !showUp && (
                <div onClick={openModal} className={style.closeBlock}>
                  <span>x</span>
                </div>
              )}
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
                {state.taskDesc ? (
                  <div className={style.modalTaskDesc}>
                    <div
                      onClick={handleOpenChange}
                      className={style.descrptionDiv}
                    >
                      <span>Add more detailed description...</span>
                    </div>
                  </div>
                ) : (
                  <div className={style.modalTaskDescChangeBlock}>
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
                  </div>
                )}
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
                {state.comment ? (
                  <div
                    onClick={openUserCommentInput}
                    className={style.commentInput}
                  >
                    <span>Write comment...</span>
                  </div>
                ) : (
                  <div className={style.inputForComment}>
                    <textarea
                      autoFocus={true}
                      onBlur={handleBlurComment}
                      placeholder="Write a  your comment"
                    />
                    <button>Save</button>
                  </div>
                )}
              </div>
              <div className={style.commentBlock}>
                <div className={style.commentBlock_header}>
                  <div className={style.iconUser}>
                    <UserNameIcon name="Gurgen" lastName="Bayramyan" />
                  </div>
                  <h4>Name Lastname</h4>
                  <p>Date</p>
                </div>
                <div className={style.comentContnet}>
                  <span>this is comment</span>
                </div>
                <div className={style.settingsComment}>
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>
            <div className={style.downRightComponent}>
              <h5>Add to card</h5>

              <MembersModal />
              <EditLabelModal />
              <CheckListModal />
              <DatesModal />
              <Attachment />
              <CoverModal />
              <CustomModal />
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
              <MoveModal />
              <CopyModal />
              {modalState.upModalShow ? (
                <div onClick={openTemplateModal} className={style.coostomBlock}>
                  <span>Template</span>
                  <CheckBoxIcon sx={{ fontSize: "17px" }} />
                </div>
              ) : (
                <div onClick={openTemplateModal} className={style.coostomBlock}>
                  <DesktopMacIcon sx={{ fontSize: "15px" }} />
                  <span>Make template</span>
                </div>
              )}
              <hr />
              {!!showUp && (
                <div onClick={handleClose} className={style.coostomBlock}>
                  <RemoveFromQueueIcon sx={{ fontSize: "15px" }} />
                  <span>Send to board</span>
                </div>
              )}
              {(!!showUp || modalState.upModalShow) && (
                <div className={style.section}>
                  
                  <div
                    onClick={openDeleteModal}
                    className={style.coostomDelete}
                  >
                    <RemoveIcon sx={{ fontSize: "15px" }} />
                    <span>Delete</span>
                  </div>
                  {!!deleteModal && <DeleteModal onClose={openDeleteModal} />}
                </div>
              )}
              {!modalState.upModalShow && !showUp && (
                <div onClick={openArchiveBlock} className={style.coostomBlock}>
                  <PhotoAlbumIcon sx={{ fontSize: "15px" }} />
                  <span>Archive</span>
                </div>
              )}
              {modalState.upModalShow && (
                <div onClick={handleChangeHide} className={style.coostomBlock}>
                  {!hide ? (
                    <RemoveFromQueueIcon sx={{ fontSize: "15px" }} />
                  ) : (
                    <RefreshIcon sx={{ fontSize: "15px" }} />
                  )}
                  {!hide ? (
                    <span>Hide from list</span>
                  ) : (
                    <span>Show in list</span>
                  )}
                </div>
              )}
              <ShareModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlock;
