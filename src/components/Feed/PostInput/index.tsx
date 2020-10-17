import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Paper,
  Modal,
  Button,
  TextareaAutosize,
  darken,
  TextField,
  CardMedia,
  InputBase,
} from "@material-ui/core";
import { blue, green, grey, red, yellow } from "@material-ui/core/colors";
import useStyles from "./styles";
import {
  VideoCall,
  PhotoLibrary,
  Close as CloseIcon,
  Person,
} from "@material-ui/icons";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import Option from "../../Option";
import Flex from "../../Flex";
import Avatar from "../../Avatar";
import { Scrollbars } from "react-custom-scrollbars";

interface Props extends React.HTMLProps<HTMLDivElement> {}

function PostInput({ ...rest }: Props): ReactElement {
  const classes = useStyles();
  const [Open, setOpen] = useState(false);
  const [currentFiles, setcurrentFiles] = useState<FileList | null>(null);
  const [PreviewImg, setPreviewImg] = useState<string>('');
  const icons_list = [
    {
      color_icon: red["500"],
      icon_className: classes.modal_body_options_icon,
      Icon: VideoCall,
    },
    {
      color_icon: yellow["700"],
      icon_className: classes.modal_body_options_icon,
      Icon: EmojiEmotionsOutlinedIcon,
    },
  ];

  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    currentFiles && setPreviewImg( URL.createObjectURL(currentFiles[0]) )
  }, [currentFiles]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setcurrentFiles(files);
  };

  const onSubmit = useCallback(() => {
    alert("We are the lovesick girls!!");
  }, []);

  const body = (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <div className={classes.body_header}>
          <h3 className={classes.body_header_title}>Create Post</h3>
          <Option
            Icon={CloseIcon}
            onClick={() => setOpen(false)}
            className={classes.cancel_icon}
          />
        </div>
        <hr className={classes.hr}></hr>
        <Flex align="center" className={classes.body_whoCanWatchIt_section}>
          <Avatar name="Jorge Duran" />
        </Flex>

        <Flex className={classes.body_center_section} direction="column">
          <InputBase
            placeholder="What's on your mind"
            multiline
            fullWidth
            inputProps={{
              className: classes.textField,
            }}
          />
          { PreviewImg && <Flex style={{position: 'relative'}}>
              <Option
                Icon={CloseIcon}
                onClick={() => setPreviewImg('')}
                className={classes.cancel_icon}
                style={{position: 'absolute', top: 10, right: 10, zIndex: 3}}
              />
              <img
                src={PreviewImg}
                className={classes.preview_img}
                alt="preview"
              />
            </Flex>
          }
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          className={classes.AddPost_container}
        >
          <h4>Add to your Post</h4>
          <Flex className={classes.modal_body_options}>
            {icons_list.map((icon, i) => (
              <Option key={i} {...icon} />
            ))}
            <label>
              <input
                type="file"
                hidden
                onChange={handleFile}
                ref={inputFileRef}
              />
              <Option
                color_icon={green["500"]}
                icon_className={classes.modal_body_options_icon}
                Icon={PhotoLibrary}
              />
            </label>
            <Option
              Icon={Person}
              color_icon={blue["400"]}
              icon_className={classes.modal_body_options_icon}
            />
          </Flex>
        </Flex>

        <Button
          fullWidth
          onClick={onSubmit}
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </Paper>
    </div>
  );

  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.Input__container}>
          <img
            className={classes.imgProfile}
            alt="avatar"
            src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"
          />
          <input
            onClick={() => setOpen(true)}
            className={classes.Input}
            type="text"
            placeholder="What's on your mind ?"
          />
        </div>
        <hr className={classes.hr} />
        <div className={classes.Options__container}>
          <div className={classes.Options}>
            <VideoCall
              className={classes.Options__Icon}
              style={{ color: red["500"] }}
            />
            <h5 className={classes.Options__text}>Live Video</h5>
          </div>
          <div className={classes.Options}>
            <PhotoLibrary
              className={classes.Options__Icon}
              style={{ color: green["500"] }}
            />
            <h5 className={classes.Options__text}>Photo/Video</h5>
          </div>
          <div className={classes.Options}>
            <EmojiEmotionsOutlinedIcon
              className={classes.Options__Icon}
              style={{ color: yellow["700"] }}
            />
            <h5 className={classes.Options__text}>Feeling/Activity</h5>
          </div>
        </div>
      </Paper>
      <Modal open={Open} onClose={() => setOpen(false)}>
        {body}
      </Modal>
    </>
  );
}

export default PostInput;
