import axios from "axios";
import { IRegistration } from "components/Registration/RegistrationTypes";

export const removeRepeatPasword = (data: IRegistration) => {
  const filteredUserObject = Object.entries(data).filter(([key]) => {
    return key !== "repeatPassword";
  });
  return Object.fromEntries(filteredUserObject);
};

export const toastDefaultValue = () => {
  return {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
};

export const fetchLogout = async () => {
  const resp = await axios.post(
    "https://young-citadel-44598.herokuapp.com/logout"
  );
  return resp;
};

export const getUSerData = async () => {
  const resp = await axios.get(
    "https://young-citadel-44598.herokuapp.com/user",
    { withCredentials: true }
  );
  return resp.data;
};

export const getTemplateMenuState = (
  top: number,
  height: number,
  width: number,
  left: number
) => {
  if (top + height > window.innerHeight) {
    if (window.innerWidth < width + left) {
      return {
        left: window.innerWidth - (width + left),
        top: -(top + height - window.innerHeight) - 60,
      };
    }
    return {
      top:
        -(top + height - window.innerHeight) -
        height +
        (top + height - window.innerHeight) -
        5,
      left: 0,
    };
  }

  if (window.innerWidth < width + left) {
    return {
      left: window.innerWidth - (width + left),
    };
  }

  return {
    top: 35,
  };
};
export const getPosition = (
  width: number,
  height: number,
  top: number,
  left: number,
) => {
  if (top + height > window.innerHeight) {
    if (left + width > window.innerWidth) {
      return {
        currentTop: -height,
        currentLeft: -width,
      };
    }
    return {
      currentTop: -height,
    };
  } else {
    if (left + width > window.innerWidth) {
      return {
        currentLeft: -width,
      };
    }
    return {
      currentTop: 80,
    };
  }
}
 export const getPositonShow = (top:number,left:number,width:number,show:boolean) => {
  if(top + 300 > window.innerHeight){
   return  {
      top:590,
      left:left + width - 25,
      show:!show
    }
  }else{
    return {
        top:top + 30,
        left:left + width - 25,
        show:!show
      }
  }
 }  