import { Dispatch, createContext } from "react";

interface ContextProps {
    isThumbnail: boolean;
    setThumbnail: Dispatch<React.SetStateAction<boolean>>;
  }

export const MyContext = createContext<ContextProps>({
    isThumbnail: true,
    setThumbnail: () => {}
});
